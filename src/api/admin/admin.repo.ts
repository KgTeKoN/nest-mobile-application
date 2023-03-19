import { PrismaService } from '../../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { AdminDto } from './dto/admin.dto';

@Injectable()
export class AdminRepo {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<AdminDto[] | null> {
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
        createdAt: true,
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

  async findOne(data) {
    return this.prisma.admin.findUnique({ where: data });
  }

  async update(filter, data) {
    return this.prisma.admin.update({ where: filter, data });
  }
}
