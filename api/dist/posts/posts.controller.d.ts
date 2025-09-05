import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
export declare class PostsController {
    private postsService;
    constructor(postsService: PostsService);
    create(createPostDto: CreatePostDto, req: any): Promise<{
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
    findAll(feed: string): Promise<({
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
    getFeed(req: any): Promise<({
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
    findOne(id: string): Promise<({
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
    remove(id: string, req: any): Promise<{
        id: string;
        content: string;
        imageUrl: string | null;
        createdAt: Date;
        authorId: string;
    }>;
}
