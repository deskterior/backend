import { Controller, Get, Post, Body } from '@nestjs/common';
import UserService from './user.service';
import { User } from '../entities/user.entity';

@Controller('user')
export default class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Post()
  async create(@Body() userData: Partial<User>): Promise<User> {
    return this.userService.create(userData);
  }
}
