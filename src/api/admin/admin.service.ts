import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { AdminRepo } from './admin.repo';
import { AdminDto } from './dto/admin.dto';
import { CryptoService } from '../../crypto/crypto.service';

@Injectable()
export class AdminService {
  constructor(
    private adminRepo: AdminRepo,
    private cryptoService: CryptoService,
  ) {}

  async create(createAdminDto: CreateAdminDto) {
    const admin = await this.adminRepo.findOne({ email: createAdminDto.email });
    if (admin) {
      throw new BadRequestException('Email already exist');
    }
    const hash = await this.cryptoService.createHash(createAdminDto.password);
    const encryptedPassword = await this.cryptoService.encryptData(hash);
    const { id } = await this.adminRepo.create({
      ...createAdminDto,
      password: encryptedPassword,
    });
    return {
      success: true,
      id,
    };
  }

  async findAll() {
    const result = await this.adminRepo.findAll();
    if (!result) {
      throw new NotFoundException('Admins not found');
    }
    return {
      success: true,
      admins: result.map((el) => new AdminDto(el)),
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
