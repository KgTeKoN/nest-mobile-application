import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigService } from '@nestjs/config';
import { MorganInterceptor } from 'nest-morgan';

@UseInterceptors(MorganInterceptor('dev'))
@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private configService: ConfigService,
  ) {}

  @Get()
  getServerStart(): string {
    return this.appService.getServerStart(
      this.configService.get<number>('app.port'),
    );
  }
}
