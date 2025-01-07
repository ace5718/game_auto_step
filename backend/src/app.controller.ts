import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // 提供健康檢查端點
  @Get('health')
  getHealth(): object {
    return { status: 'ok' };
  }

  // 基本系統資訊查詢
  @Get('system-info')
  getSystemInfo(): object {
    return this.appService.getSystemInfo();
  }
}
