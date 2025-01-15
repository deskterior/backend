import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import UserService from './user.service';
import UserController from './user.controller';
import { User } from '../entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UserService],
  controllers: [UserController],
  exports: [UserService], // 외부에서 이 모듈을 import할 때 사용할 수 있는 기능들
})
export default class UserModule {}
