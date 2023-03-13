import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AdminRepo } from '../../api/admin/admin.repo';

@Injectable()
export class JwtAdminStrategy extends PassportStrategy(Strategy, 'admin') {
  constructor(
    private configService: ConfigService,
    private adminRepo: AdminRepo,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: configService.get<string>('JWT_ACCESS_SECRET_KEY'),
    });
  }

  async validate(payload: any) {
    if (payload.role === 'admin' || payload.role === 'superAdmin') {
      const person = await this.adminRepo.findOne({ id: payload.id });
      if (!person) return null;
      return { ...person, role: payload.role };
    }
    return null;
  }
}
