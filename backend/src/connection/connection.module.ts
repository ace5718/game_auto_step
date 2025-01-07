import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConnectionController } from './connection.controller';
import { ConnectionService } from './connection.service';
import { Connection } from './entities/connection.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Connection])], // 導入必要的外部模組
  controllers: [ConnectionController],
  providers: [ConnectionService],
})
export class ConnectionModule {}
