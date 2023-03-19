import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInAuthDto } from './dto/signIn-auth.dto';
import {
  ApiBasicAuth,
  ApiForbiddenResponse,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { SignInResponseDto } from './dto/swagger.dto';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @ApiBasicAuth()
  @ApiOperation({ summary: 'Sign in with email and password' })
  @ApiResponse({ status: 201, type: SignInResponseDto })
  @ApiForbiddenResponse({ description: 'Credentials incorrect' })
  signIn(@Body() signInAuthDto: SignInAuthDto) {
    return this.authService.signIn(signInAuthDto);
  }
}
