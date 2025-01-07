import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as cors from 'cors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 配置全域中間件
  app.use(cors());

  // 設定 CORS 策略，允許特定來源
  const frontendIp = process.env.FRONTEND_IP ?? 'http://localhost';
  const frontendPort = process.env.FRONTEND_PORT ?? '50000';
  app.enableCors({
    origin: [`${frontendIp}:${frontendPort}`], // 允許的前端來源
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  // 配置 Swagger API 文檔
  const config = new DocumentBuilder()
    .setTitle('Game Auto Step API')
    .setDescription('The Game Auto Step API description')
    .setVersion('1.0')
    .addTag('game-auto-step')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);

  // 設定全域前綴
  app.setGlobalPrefix('api');

  // 啟動 HTTP 服務器
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
