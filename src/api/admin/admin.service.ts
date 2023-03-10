import { Injectable } from '@nestjs/common';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { AdminRepo } from './admin.repo';

@Injectable()
export class AdminService {
  constructor(private adminRepo: AdminRepo) {}

  async create(createAdminDto: CreateAdminDto) {
    return 'This action adds a new admin';
  }

  async findAll() {
    return this.adminRepo.findAll();
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
