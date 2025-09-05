import { PrismaService } from '../prisma/prisma.service';
export declare class UsersService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: {
        email: string;
        name: string;
        password: string;
    }): Promise<{
        id: string;
        email: string;
        name: string;
        password: string;
        createdAt: Date;
    }>;
    findById(id: string): Promise<{
        id: string;
        email: string;
        name: string;
        createdAt: Date;
        _count: {
            posts: number;
            following: number;
            followers: number;
        };
    } | null>;
    findByEmail(email: string): Promise<{
        id: string;
        email: string;
        name: string;
        password: string;
        createdAt: Date;
    } | null>;
    findAll(): Promise<{
        id: string;
        email: string;
        name: string;
        createdAt: Date;
        _count: {
            posts: number;
            following: number;
            followers: number;
        };
    }[]>;
    getFollowers(userId: string): Promise<{
        id: string;
        email: string;
        name: string;
        createdAt: Date;
    }[]>;
    getFollowing(userId: string): Promise<{
        id: string;
        email: string;
        name: string;
        createdAt: Date;
    }[]>;
    follow(followerId: string, followingId: string): Promise<{
        createdAt: Date;
        followerId: string;
        followingId: string;
    }>;
    unfollow(followerId: string, followingId: string): Promise<{
        createdAt: Date;
        followerId: string;
        followingId: string;
    }>;
    isFollowing(followerId: string, followingId: string): Promise<boolean>;
}
