import { ApiProperty } from '@nestjs/swagger';

export class SignInResponseDto {
  @ApiProperty()
  success: boolean;

  @ApiProperty()
  accessToken: string;

  @ApiProperty()
  refreshToken: string;
}
