import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { AdminService } from './admin.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { AdminGuard, SuperAdminGuard } from '../../auth/guard/jwt.guard';
import {
  ApiBadRequestResponse,
  ApiBody,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOperation,
  ApiResponse,
  ApiSecurity,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { CreateResponseDto, FindAllResponse } from './dto/swagger.dto';

@ApiTags('Admin')
@Controller('admin')
@ApiUnauthorizedResponse({ description: 'Unauthorized' })
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @UseGuards(SuperAdminGuard)
  @Post()
  @ApiOperation({ summary: 'Create admin' })
  @ApiSecurity('superAdmin')
  @ApiBody({ type: CreateAdminDto })
  @ApiCreatedResponse({ type: CreateResponseDto })
  @ApiBadRequestResponse({ description: 'Email already exist' })
  async create(@Body() createAdminDto: CreateAdminDto) {
    return this.adminService.create(createAdminDto);
  }

  @UseGuards(AdminGuard)
  @Get()
  @ApiOperation({ summary: 'Get all admins' })
  @ApiSecurity('admin')
  @ApiResponse({ status: 200, type: FindAllResponse })
  @ApiNotFoundResponse({ description: 'Admins not found' })
  async findAll() {
    return this.adminService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.adminService.findOne(+id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateAdminDto: UpdateAdminDto,
  ) {
    return this.adminService.update(+id, updateAdminDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.adminService.remove(+id);
  }
}
