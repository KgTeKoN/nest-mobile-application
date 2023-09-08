import { IsDefined, IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class SignInAuthDto {
  @IsDefined()
  @IsString()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsDefined()
  @IsString()
  @IsNotEmpty()
  password: string;
}
