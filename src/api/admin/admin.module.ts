import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';
import { AdminRepo } from './admin.repo';
import { CryptoService } from '../../crypto/crypto.service';

@Module({
  controllers: [AdminController],
  providers: [AdminService, AdminRepo, CryptoService],
  exports: [AdminService],
})
export class AdminModule {}
