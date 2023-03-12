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

export class CreateAdminDto {
  @IsDefined()
  @IsString()
  @IsEmail()
  @IsNotEmpty()
  email: string;

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

  @IsDefined()
  @IsString()
  @Matches(new RegExp('^[A-z0-9._]{3,30}$'))
  firstName: string;

  @IsOptional()
  @IsString()
  @Matches(new RegExp('^[A-z0-9._]{3,30}$'))
  lastName?: string;

  @IsOptional()
  @IsBoolean()
  isSuper?: boolean;
}
