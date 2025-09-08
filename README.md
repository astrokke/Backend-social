# Mini Réseau Social - API Backend

TP final pour le cours de développement backend. API développée avec NestJS et Prisma.

## Ce que fait l'API

Une API simple pour un réseau social avec :
- Inscription/connexion des utilisateurs
- Publication de posts (texte + image optionnelle)
- Système de likes
- Suivre/ne plus suivre d'autres utilisateurs
- Feed personnalisé avec les posts des personnes qu'on suit

## Installation et lancement

### Prérequis
- Node.js 
- PostgreSQL
- npm

### Setup

1. **Installer les dépendances :**
```bash
cd api
npm install
```

2. **Configurer PostgreSQL :**
```bash
# Créer la base de données sous linux sinon jsp 
sudo -u postgres createdb social_db
```

3. **Variables d'environnement :**
Créer un fichier `.env` dans le dossier `api/` :
```
DATABASE_URL=""
JWT_SECRET=""
```

4. **Lancer les migrations :**
```bash
npx prisma migrate dev --name init
```

5. **Démarrer l'API :**
```bash
npm run start:dev
```

L'API sera accessible sur `http://localhost:3000`

## Demo de l'API avec Postman

### 1. Inscription d'un utilisateur

**Méthode :** `POST`  
**URL :** `http://localhost:3000/auth/register`  
**Headers :** `Content-Type: application/json`  
**Body (raw JSON) :**
```json
{
  "email": "john@example.com",
  "name": "John Doe",
  "password": "password123"
}
```

### 2. Connexion

**Méthode :** `POST`  
**URL :** `http://localhost:3000/auth/login`  
**Headers :** `Content-Type: application/json`  
**Body (raw JSON) :**
```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

### 3. Créer un post

**URL :** `http://localhost:3000/posts`  

**Body (raw JSON) :**
```json
{
  "content": "Mon premier post sur le réseau social !",
  "imageUrl": "https://example.com/image.jpg"
}
```

### 4. Voir tous les posts

**Méthode :** `GET`  
**URL :** `http://localhost:3000/posts`  

### 5. Inscrire un deuxième utilisateur

**Méthode :** `POST`  
**URL :** `http://localhost:3000/auth/register`  
**Body (raw JSON) :**
```json
{
  "email": "jane@example.com",
  "name": "Jane Smith",
  "password": "password123"
}
```

### 6. Suivre un utilisateur

**Méthode :** `POST`  
**URL :** `http://localhost:3000/users/USER_ID/follow` (remplacer USER_ID par l'ID de Jane)  

### 7. Liker un post

**Méthode :** `POST`  
**URL :** `http://localhost:3000/likes/POST_ID` (remplacer POST_ID par l'ID du post)  

### 8. Voir le feed personnalisé

**Méthode :** `GET`  
**URL :** `http://localhost:3000/posts/feed`  

### 9. Voir les abonnements

**Méthode :** `GET`  
**URL :** `http://localhost:3000/users/USER_ID/following`  



# jenkins
