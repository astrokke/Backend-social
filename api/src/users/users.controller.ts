import { Controller, Get, Post, Delete, Param, UseGuards, Request } from '@nestjs/common';
import { UsersService } from './users.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  async findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.usersService.findById(id);
  }

  @Get(':id/followers')
  async getFollowers(@Param('id') id: string) {
    return this.usersService.getFollowers(id);
  }

  @Get(':id/following')
  async getFollowing(@Param('id') id: string) {
    return this.usersService.getFollowing(id);
  }

  @Post(':id/follow')
  @UseGuards(JwtAuthGuard)
  async follow(@Param('id') followingId: string, @Request() req: any) {
    return this.usersService.follow(req.user.id, followingId);
  }

  @Delete(':id/follow')
  @UseGuards(JwtAuthGuard)
  async unfollow(@Param('id') followingId: string, @Request() req: any) {
    return this.usersService.unfollow(req.user.id, followingId);
  }
}
