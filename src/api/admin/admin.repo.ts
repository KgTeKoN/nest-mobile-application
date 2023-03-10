import { PrismaService } from '../../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { IAdmin } from './admin.interfaces';

@Injectable()
export class AdminRepo {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<IAdmin[]> {
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
