import { ApiProperty } from '@nestjs/swagger';
import { getAllAdminDto } from './getAll-admin.dto';

export class createResponse {
  @ApiProperty()
  success: boolean;

  @ApiProperty()
  id: number;
}

export class findAllResponse {
  @ApiProperty()
  success: boolean;

  @ApiProperty()
  admins: getAllAdminDto[];
}
