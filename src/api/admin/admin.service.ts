import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { AdminRepo } from './admin.repo';
import { getAllAdminDto } from './dto/getAll-admin.dto';

@Injectable()
export class AdminService {
  constructor(private adminRepo: AdminRepo) {}

  async create(createAdminDto: CreateAdminDto) {
    return 'This action adds a new admin';
  }

  async findAll() {
    const result = await this.adminRepo.findAll();
    if (!result) {
      throw new NotFoundException('Admins not found');
    }
    return {
      success: true,
      admins: result.map((el) => new getAllAdminDto(el)),
    };
  }

  async findOne(id: number) {
    return `This action returns a #${id} admin`;
  }

  async update(id: number, updateAdminDto: UpdateAdminDto) {
    return `This action updates a #${id} admin`;
  }

  async remove(id: number) {
    return `This action removes a #${id} admin`;
  }
}
