import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInAuthDto } from './dto/signIn-auth.dto';
import { ApiBasicAuth, ApiForbiddenResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @ApiBasicAuth()
  @ApiForbiddenResponse({ description: 'Credentials incorrect' })
  signIn(@Body() signInAuthDto: SignInAuthDto) {
    return this.authService.signIn(signInAuthDto);
  }
}
