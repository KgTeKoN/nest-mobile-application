import { ApiProperty } from '@nestjs/swagger';
import { AdminDto } from './admin.dto';

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
  admins: AdminDto[];
}
