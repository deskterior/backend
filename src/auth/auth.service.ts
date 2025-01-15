import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import UserService from '../users/user.service';
import { User } from 'src/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
  ) {}

  async signJwt(user: User) {
    const isAlreadySignedUp = await this.userService.findOne(user.id);
    if (!isAlreadySignedUp) {
      await this.userService.create(user);
    }

    const jwtPayload = { id: user.id, email: user.email };
    return {
      accessToken: this.jwtService.sign(jwtPayload),
    };
  }
}
