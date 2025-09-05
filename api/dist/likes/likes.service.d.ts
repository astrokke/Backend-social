import { PrismaService } from '../prisma/prisma.service';
export declare class LikesService {
    private prisma;
    constructor(prisma: PrismaService);
    like(userId: string, postId: string): Promise<{
        createdAt: Date;
        userId: string;
        postId: string;
    }>;
    unlike(userId: string, postId: string): Promise<{
        createdAt: Date;
        userId: string;
        postId: string;
    }>;
    getLikesCount(postId: string): Promise<number>;
    isLikedByUser(postId: string, userId: string): Promise<boolean>;
    getLikesByUser(userId: string): Promise<({
        post: {
            _count: {
                likes: number;
            };
            author: {
                name: string;
                id: string;
                email: string;
            };
        } & {
            createdAt: Date;
            id: string;
            content: string;
            imageUrl: string | null;
            authorId: string;
        };
    } & {
        createdAt: Date;
        userId: string;
        postId: string;
    })[]>;
}
