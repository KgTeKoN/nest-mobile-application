import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigService } from '@nestjs/config';
import { MorganInterceptor } from 'nest-morgan';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@UseInterceptors(MorganInterceptor('dev'))
@ApiTags('Server')
@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private configService: ConfigService,
  ) {}

  @Get()
  @ApiResponse({
    status: 200,
    description: 'Server has been started at 3000 port',
  })
  getServerStart(): string {
    return this.appService.getServerStart(
      this.configService.get<number>('app.port'),
    );
  }
}
