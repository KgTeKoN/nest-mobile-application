import { PrismaService } from '../../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { IAdmin } from './dto/getAll-admin.dto';

@Injectable()
export class AdminRepo {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<IAdmin[] | null> {
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
