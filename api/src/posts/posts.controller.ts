import { Controller, Get, Post, Delete, Body, Param, UseGuards, Request, Query } from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('posts')
export class PostsController {
  constructor(private postsService: PostsService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  async create(@Body() createPostDto: CreatePostDto, @Request() req: any) {
    return this.postsService.create(req.user.id, createPostDto);
  }

  @Get()
  async findAll(@Query('feed') feed: string) {
    if (feed === 'true') {
      throw new Error('Use /posts/feed endpoint');
    }
    return this.postsService.findAll();
  }

  @Get('feed')
  @UseGuards(JwtAuthGuard)
  async getFeed(@Request() req: any) {
    return this.postsService.getFeed(req.user.id);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.postsService.findById(id);
  }

  @Get('author/:authorId')
  async findByAuthor(@Param('authorId') authorId: string) {
    return this.postsService.findByAuthor(authorId);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  async remove(@Param('id') id: string, @Request() req: any) {
    return this.postsService.remove(id, req.user.id);
  }
}
