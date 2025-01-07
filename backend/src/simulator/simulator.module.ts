import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SimulatorController } from './simulator.controller';
import { SimulatorService } from './simulator.service';
import { Simulator } from './entities/simulator.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Simulator])], // 導入必要的外部模組
  controllers: [SimulatorController],
  providers: [SimulatorService],
})
export class SimulatorModule {}
