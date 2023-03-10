import { PrismaService } from '../../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { Admin } from './admin.interfaces';

@Injectable()
export class AdminRepo {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<Admin[]> {
    return this.prisma.admin.findMany({
      select: {
        id: true,
        email: true,
        firstName: true,
        lastName: true,
        isSuper: true,
      },
    });
  }
}
