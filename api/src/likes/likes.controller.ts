import { Controller, Post, Delete, Param, UseGuards, Request, Get } from '@nestjs/common';
import { LikesService } from './likes.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('likes')
export class LikesController {
  constructor(private likesService: LikesService) {}

  @Post(':postId')
  @UseGuards(JwtAuthGuard)
  async like(@Param('postId') postId: string, @Request() req: any) {
    return this.likesService.like(req.user.id, postId);
  }

  @Delete(':postId')
  @UseGuards(JwtAuthGuard)
  async unlike(@Param('postId') postId: string, @Request() req: any) {
    return this.likesService.unlike(req.user.id, postId);
  }

  @Get(':postId/count')
  async getLikesCount(@Param('postId') postId: string) {
    const count = await this.likesService.getLikesCount(postId);
    return { count };
  }

  @Get('my-likes')
  @UseGuards(JwtAuthGuard)
  async getMyLikes(@Request() req: any) {
    return this.likesService.getLikesByUser(req.user.id);
  }
}
