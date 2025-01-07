import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Simulator } from './entities/simulator.entity';
import { CreateSimulatorDto } from './dto/create-simulator.dto';
import { UpdateSimulatorDto } from './dto/update-simulator.dto';

@Injectable()
export class SimulatorService {
  constructor(
    @InjectRepository(Simulator)
    private simulatorRepository: Repository<Simulator>,
  ) {}

  // 實現模擬器業務邏輯
  create(createSimulatorDto: CreateSimulatorDto): Promise<Simulator> {
    const simulator = this.simulatorRepository.create(createSimulatorDto);
    return this.simulatorRepository.save(simulator);
  }

  findAll(): Promise<Simulator[]> {
    return this.simulatorRepository.find();
  }

  findOne(id: string): Promise<Simulator> {
    return this.simulatorRepository.findOne(id);
  }

  update(id: string, updateSimulatorDto: UpdateSimulatorDto): Promise<void> {
    return this.simulatorRepository.update(id, updateSimulatorDto).then(() => {});
  }

  remove(id: string): Promise<void> {
    return this.simulatorRepository.delete(id).then(() => {});
  }

  // 處理模擬器狀態管理
  start(id: string): Promise<void> {
    // 實現啟動模擬器邏輯
    return Promise.resolve();
  }

  stop(id: string): Promise<void> {
    // 實現停止模擬器邏輯
    return Promise.resolve();
  }

  getStatus(id: string): Promise<string> {
    // 實現取得模擬器狀態邏輯
    return Promise.resolve('running');
  }
}
