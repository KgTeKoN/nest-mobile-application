import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { AdminRepo } from '../api/admin/admin.repo';
import { CryptoService } from '../crypto/crypto.service';

@Module({
  controllers: [AuthController],
  providers: [AuthService, AdminRepo, CryptoService],
})
export class AuthModule {}
