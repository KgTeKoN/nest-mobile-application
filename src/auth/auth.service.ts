import { ForbiddenException, Injectable } from '@nestjs/common';
import { SignInAuthDto } from './dto/signIn-auth.dto';
import { AdminRepo } from '../api/admin/admin.repo';
import { CryptoService } from '../crypto/crypto.service';
import * as argon from 'argon2';

@Injectable()
export class AuthService {
  constructor(
    private adminRepo: AdminRepo,
    private cryptoService: CryptoService,
  ) {}
  async signIn(signInAuthDto: SignInAuthDto) {
    const admin = await this.adminRepo.findOne({ email: signInAuthDto.email });
    if (!admin) {
      throw new ForbiddenException('Credentials incorrect');
    }
    const deCryptPw = await this.cryptoService.deCrypto(admin.password);
    const pwMatches = await argon.verify(deCryptPw, signInAuthDto.password);
    if (!pwMatches) {
      throw new ForbiddenException('Credentials incorrect');
    }
    delete admin.password;
    return admin;
  }
}
