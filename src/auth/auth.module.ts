import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { AdminRepo } from '../api/admin/admin.repo';
import { CryptoService } from '../crypto/crypto.service';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './strategy/jwt.strategy';

@Module({
  imports: [JwtModule.register({})],
  controllers: [AuthController],
  providers: [AuthService, AdminRepo, CryptoService, JwtStrategy],
})
export class AuthModule {}
