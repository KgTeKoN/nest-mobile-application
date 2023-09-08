import {
  IsBoolean,
  IsDefined,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
  Matches,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateAdminDto {
  @ApiProperty({ example: 'testemail@gmail.com' })
  @IsDefined()
  @IsString()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ example: 'Password7!' })
  @IsDefined()
  @IsString()
  @IsNotEmpty()
  @Length(8, 20)
  @Matches(/\d/, {
    message: 'Password must contain a number',
  })
  @Matches(/[A-Z]/, {
    message: 'Password must contain a uppercase letter',
  })
  @Matches(/[\s!”"#$%&'()*+,\-.\/:;<=>?@\[\]\\^_`{|}~]/, {
    message: 'Password must contain a special character',
  })
  @Matches(
    new RegExp(
      '^[a-zA-Z0-9\\s!”"#$%&\'()*+,\\-.\\/:;<=>?@\\[\\]\\\\^_`{|}~]{8,20}$',
    ),
    {
      message:
        'Password must contain only letters, numbers, special characters',
    },
  )
  password: string;

  @ApiProperty({ example: 'Andrii' })
  @IsDefined()
  @IsString()
  @Matches(new RegExp('^[A-z0-9._]{3,30}$'))
  firstName: string;

  @ApiPropertyOptional({ example: 'Siromaha' })
  @IsOptional()
  @IsString()
  @Matches(new RegExp('^[A-z0-9._]{3,30}$'))
  lastName?: string;

  @ApiPropertyOptional({ example: true })
  @IsOptional()
  @IsBoolean()
  isSuper?: boolean;
}
