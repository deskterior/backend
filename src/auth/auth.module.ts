import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import UserModule from '../users/user.module';
import { KakaoStrategy } from './strategies/kakao.strategy';

@Module({
  imports: [
    JwtModule.register({
      secret: 'default-secret', // 20250112 TODO secret key 제대로 설정
      signOptions: { expiresIn: '1h' }, // 토큰 만료 시간 설정
    }),
    UserModule,
  ],
  controllers: [AuthController],
  providers: [AuthService, KakaoStrategy],
})
export class AuthModule {}
