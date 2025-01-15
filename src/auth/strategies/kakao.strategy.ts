import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Profile, Strategy } from 'passport-kakao';
import { AuthService } from '../auth.service';

@Injectable()
export class KakaoStrategy extends PassportStrategy(Strategy, 'kakao') {
  constructor(private readonly authService: AuthService) {
    super({
      clientID: process.env.KAKAO_CLIENT_ID,
      callbackURL: process.env.KAKAO_CALLBACK_URL,
      scope: ['account_email', 'profile_nickname'],
    });
  }

  async validate(
    accessToken: string,
    refreshToken: string,
    profile: Profile,
    done: (error: any, user?: any, info?: any) => void,
  ) {
    const { id, _json } = profile;
    const kakaoAccount = _json.kakao_account;

    const user = {
      id: Number(id),
      username: profile.username,
      email: kakaoAccount.email,
      password: '',
      profile: {
        nickname: kakaoAccount.profile.nickname,
        image: '',
      },
    };

    const result = await this.authService.signJwt(user);

    done(null, result);
  }
}
