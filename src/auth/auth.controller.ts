import { Controller, UseGuards, Get, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('api/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // Guard: request를 컨트롤러나 메서드가 처리하기 전에 가로채서 특정 조건을 검사하는 용도
  // ex) 사용자 로그인 여부, 특정 권한 소유 여부 확인 등
  //
  // @UseGuard: 특정 요청에 Guard를 적용하여 조건을 통과하지 못한 요청 차단
  // 조건이 통과되지 못하면 요청이 컨트롤러에 전달되지 않고 거부
  // 조건이 통과하면 controller 진행
  @Get('login/kakao')
  @UseGuards(AuthGuard('kakao'))
  async kakaoLogin(): Promise<void> {}

  // req 객체를 통째로 return 하려고 하면 순환참조 오류 발생
  // kakaoRedirect의 req는 kakaoStrategy의 반환값
  @Get('kakao/redirect')
  @UseGuards(AuthGuard('kakao'))
  async kakaoRedirect(@Req() req) {
    return {
      message: 'success login with kakao',
      user: req.user,
    };
  }
}
