import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConnectionModule } from './connection/connection.module';
import { SimulatorModule } from './simulator/simulator.module';
import { TaskModule } from './task/task.module';

@Module({
  imports: [ConnectionModule, SimulatorModule, TaskModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
