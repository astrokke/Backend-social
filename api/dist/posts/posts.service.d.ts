import { PrismaService } from '../prisma/prisma.service';
export declare class PostsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(authorId: string, data: {
        content: string;
        imageUrl?: string;
    }): Promise<{
        author: {
            id: string;
            email: string;
            name: string;
        };
        _count: {
            likes: number;
        };
    } & {
        id: string;
        content: string;
        imageUrl: string | null;
        createdAt: Date;
        authorId: string;
    }>;
    findAll(): Promise<({
        author: {
            id: string;
            email: string;
            name: string;
        };
        _count: {
            likes: number;
        };
    } & {
        id: string;
        content: string;
        imageUrl: string | null;
        createdAt: Date;
        authorId: string;
    })[]>;
    findById(id: string): Promise<({
        author: {
            id: string;
            email: string;
            name: string;
        };
        _count: {
            likes: number;
        };
    } & {
        id: string;
        content: string;
        imageUrl: string | null;
        createdAt: Date;
        authorId: string;
    }) | null>;
    findByAuthor(authorId: string): Promise<({
        author: {
            id: string;
            email: string;
            name: string;
        };
        _count: {
            likes: number;
        };
    } & {
        id: string;
        content: string;
        imageUrl: string | null;
        createdAt: Date;
        authorId: string;
    })[]>;
    getFeed(userId: string): Promise<({
        author: {
            id: string;
            email: string;
            name: string;
        };
        _count: {
            likes: number;
        };
    } & {
        id: string;
        content: string;
        imageUrl: string | null;
        createdAt: Date;
        authorId: string;
    })[]>;
    remove(id: string, userId: string): Promise<{
        id: string;
        content: string;
        imageUrl: string | null;
        createdAt: Date;
        authorId: string;
    }>;
    isLikedByUser(postId: string, userId: string): Promise<boolean>;
}
