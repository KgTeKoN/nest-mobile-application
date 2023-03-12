import { PrismaService } from '../../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { getAllAdminDto } from './dto/getAll-admin.dto';

@Injectable()
export class AdminRepo {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<getAllAdminDto[] | null> {
    return this.prisma.admin.findMany({
      where: {
        isDeleted: false,
      },
      select: {
        id: true,
        email: true,
        firstName: true,
        lastName: true,
        isSuper: true,
      },
    });
  }

  async create(data) {
    return this.prisma.admin.create({
      data,
      select: {
        id: true,
      },
    });
  }
}
