import { ApiProperty } from '@nestjs/swagger';
import { AdminDto } from './admin.dto';

export class CreateResponseDto {
  @ApiProperty()
  success: boolean;

  @ApiProperty()
  id: number;
}

export class FindAllResponse {
  @ApiProperty()
  success: boolean;

  @ApiProperty()
  admins: AdminDto[];
}
