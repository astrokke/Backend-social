import { LikesService } from './likes.service';
export declare class LikesController {
    private likesService;
    constructor(likesService: LikesService);
    like(postId: string, req: any): Promise<{
        createdAt: Date;
        userId: string;
        postId: string;
    }>;
    unlike(postId: string, req: any): Promise<{
        createdAt: Date;
        userId: string;
        postId: string;
    }>;
    getLikesCount(postId: string): Promise<{
        count: number;
    }>;
    getMyLikes(req: any): Promise<({
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
