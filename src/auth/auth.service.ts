import { ForbiddenException, Injectable } from '@nestjs/common';
import { SignInAuthDto } from './dto/signIn-auth.dto';
import { AdminRepo } from '../api/admin/admin.repo';
import { CryptoService } from '../crypto/crypto.service';
import * as argon from 'argon2';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private adminRepo: AdminRepo,
    private cryptoService: CryptoService,
    private configService: ConfigService,
    private jwtService: JwtService,
  ) {}

  async signIn(signInAuthDto: SignInAuthDto) {
    const admin = await this.adminRepo.findOne({ email: signInAuthDto.email });
    if (!admin) {
      throw new ForbiddenException('Credentials incorrect');
    }
    const role = admin.isSuper ? 'superAdmin' : 'admin';
    const deCryptPw = await this.cryptoService.deCrypto(admin.password);
    const pwMatches = await argon.verify(deCryptPw, signInAuthDto.password);
    if (!pwMatches) {
      throw new ForbiddenException('Credentials incorrect');
    }
    delete admin.password;
    const secret = this.configService.get<string>('JWT_SECRET_KEY');

    const accessToken = await this.jwtService.signAsync(
      { ...admin, role },
      {
        expiresIn: '1h',
        secret,
      },
    );

    return {
      success: true,
      accessToken,
    };
  }
}
