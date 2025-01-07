import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { SimulatorService } from './simulator.service';
import { CreateSimulatorDto } from './dto/create-simulator.dto';
import { UpdateSimulatorDto } from './dto/update-simulator.dto';

@Controller('simulator')
export class SimulatorController {
  constructor(private readonly simulatorService: SimulatorService) {}

  @Post()
  create(@Body() createSimulatorDto: CreateSimulatorDto) {
    return this.simulatorService.create(createSimulatorDto);
  }

  @Get()
  findAll() {
    return this.simulatorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.simulatorService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateSimulatorDto: UpdateSimulatorDto) {
    return this.simulatorService.update(id, updateSimulatorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.simulatorService.remove(id);
  }

  @Post(':id/start')
  start(@Param('id') id: string) {
    return this.simulatorService.start(id);
  }

  @Post(':id/stop')
  stop(@Param('id') id: string) {
    return this.simulatorService.stop(id);
  }

  @Get(':id/status')
  getStatus(@Param('id') id: string) {
    return this.simulatorService.getStatus(id);
  }
}
