import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  // 提供全局共用服務
  getHello(): string {
    return 'Hello World!';
  }

  // 處理系統層級的業務邏輯
  getSystemInfo(): object {
    return {
      status: 'running',
      version: '1.0.0',
    };
  }
}
