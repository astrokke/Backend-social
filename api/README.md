# API Réseau Social - Backend

API backend développée avec NestJS et Prisma pour un mini réseau social.

## Prérequis

- Node.js (version 18 ou supérieure)
- PostgreSQL (version 12 ou supérieure)
- npm ou yarn

## Installation

1. **Cloner le projet et installer les dépendances :**
```bash
cd api
npm install
```

2. **Configurer la base de données PostgreSQL :**
```bash
# Créer la base de données
sudo -u postgres createdb social_db

# Optionnel : Créer un utilisateur dédié
sudo -u postgres psql -c "CREATE USER social_user WITH PASSWORD 'secret';"
sudo -u postgres psql -c "GRANT ALL PRIVILEGES ON DATABASE social_db TO social_user;"
```

3. **Configurer les variables d'environnement :**
Créer un fichier `.env` à la racine du dossier `api/` :
```env
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/social_db?schema=public"
JWT_SECRET="your-secret-key-here"
```

4. **Appliquer les migrations Prisma :**
```bash
npx prisma migrate dev --name init_schema
```

5. **Générer le client Prisma :**
```bash
npx prisma generate
```

## Lancement de l'application

```bash
# Mode développement (avec rechargement automatique)
npm run start:dev

# Mode production
npm run build
npm run start:prod
```

L'API sera accessible sur `http://localhost:3000`

## Structure de l'API

### Authentification
- `POST /auth/register` - Inscription d'un nouvel utilisateur
- `POST /auth/login` - Connexion d'un utilisateur

### Utilisateurs
- `GET /users` - Liste de tous les utilisateurs
- `GET /users/:id` - Profil d'un utilisateur
- `GET /users/:id/followers` - Liste des abonnés d'un utilisateur
- `GET /users/:id/following` - Liste des abonnements d'un utilisateur
- `POST /users/:id/follow` - Suivre un utilisateur (authentifié)
- `DELETE /users/:id/follow` - Ne plus suivre un utilisateur (authentifié)

### Posts
- `GET /posts` - Liste de tous les posts
- `GET /posts/feed` - Feed personnalisé (posts des utilisateurs suivis, authentifié)
- `GET /posts/:id` - Détails d'un post
- `GET /posts/author/:authorId` - Posts d'un auteur spécifique
- `POST /posts` - Créer un nouveau post (authentifié)
- `DELETE /posts/:id` - Supprimer un post (authentifié, propriétaire uniquement)

### Likes
- `POST /likes/:postId` - Liker un post (authentifié)
- `DELETE /likes/:postId` - Retirer son like (authentifié)
- `GET /likes/:postId/count` - Nombre de likes d'un post
- `GET /likes/my-likes` - Posts likés par l'utilisateur connecté (authentifié)

## Authentification

L'API utilise JWT (JSON Web Tokens) pour l'authentification. 

**Pour les routes protégées :**
- Inclure le header `Authorization: Bearer <token>`
- Le token est obtenu lors de l'inscription ou de la connexion

## Exemples d'utilisation

### 1. Inscription
```bash
curl -X POST http://localhost:3000/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "email": "user@example.com",
    "name": "John Doe",
    "password": "password123"
  }'
```

### 2. Connexion
```bash
curl -X POST http://localhost:3000/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "user@example.com",
    "password": "password123"
  }'
```

### 3. Créer un post (avec token)
```bash
curl -X POST http://localhost:3000/posts \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer <your-jwt-token>" \
  -d '{
    "content": "Mon premier post !",
    "imageUrl": "https://example.com/image.jpg"
  }'
```

### 4. Suivre un utilisateur
```bash
curl -X POST http://localhost:3000/users/user-id/follow \
  -H "Authorization: Bearer <your-jwt-token>"
```

## Base de données

Le schéma de base de données inclut :
- **User** : Utilisateurs (id, email, name, password, createdAt)
- **Post** : Posts (id, content, imageUrl, authorId, createdAt)
- **Like** : Likes (userId, postId, createdAt)
- **Follow** : Relations de suivi (followerId, followingId, createdAt)

## Journalisation

Les requêtes sont automatiquement journalisées dans le fichier `requests.log` à la racine du projet.

## Scripts disponibles

- `npm run start` - Démarrer l'application
- `npm run start:dev` - Démarrer en mode développement
- `npm run start:debug` - Démarrer en mode debug
- `npm run build` - Compiler l'application
- `npm run test` - Lancer les tests
- `npm run lint` - Vérifier le code avec ESLint
- `npm run format` - Formater le code avec Prettier

## Dépannage

**Erreur de connexion à la base de données :**
- Vérifier que PostgreSQL est démarré : `sudo systemctl status postgresql`
- Vérifier les identifiants dans le fichier `.env`
- Vérifier que la base de données `social_db` existe

**Erreur de migration :**
- Supprimer le dossier `prisma/migrations` et relancer `npx prisma migrate dev`

**Port déjà utilisé :**
- Changer le port dans le fichier `.env` : `PORT=3001`