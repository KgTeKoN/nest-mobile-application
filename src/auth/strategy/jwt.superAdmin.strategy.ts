import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AdminRepo } from '../../api/admin/admin.repo';

@Injectable()
export class JwtSuperAdminStrategy extends PassportStrategy(
  Strategy,
  'superAdmin',
) {
  constructor(
    private configService: ConfigService,
    private adminRepo: AdminRepo,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: configService.get<string>('JWT_SECRET_KEY'),
    });
  }

  async validate(payload: any) {
    if (payload.role === 'superAdmin') {
      const person = await this.adminRepo.findOne({ id: payload.id });
      if (!person || !person.isSuper) return null;
      return person;
    }
    return null;
  }
}
