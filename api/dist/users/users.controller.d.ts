import { UsersService } from './users.service';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
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
    findOne(id: string): Promise<{
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
    getFollowers(id: string): Promise<{
        id: string;
        email: string;
        name: string;
        createdAt: Date;
    }[]>;
    getFollowing(id: string): Promise<{
        id: string;
        email: string;
        name: string;
        createdAt: Date;
    }[]>;
    follow(followingId: string, req: any): Promise<{
        createdAt: Date;
        followerId: string;
        followingId: string;
    }>;
    unfollow(followingId: string, req: any): Promise<{
        createdAt: Date;
        followerId: string;
        followingId: string;
    }>;
}
