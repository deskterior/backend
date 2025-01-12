import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmModuleOptions } from './configs/typeorm.config';
import UserModule from './users/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }), // .env 파일 로드
    TypeOrmModule.forRoot(typeOrmModuleOptions),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
