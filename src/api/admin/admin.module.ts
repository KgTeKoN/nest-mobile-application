import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';
import { AdminRepo } from './admin.repo';

@Module({
  controllers: [AdminController],
  providers: [AdminService, AdminRepo],
  exports: [AdminService],
})
export class AdminModule {}
