import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { ConnectionService } from './connection.service';
import { CreateConnectionDto } from './dto/create-connection.dto';
import { UpdateConnectionDto } from './dto/update-connection.dto';

@Controller('connection')
export class ConnectionController {
  constructor(private readonly connectionService: ConnectionService) {}

  @Post()
  create(@Body() createConnectionDto: CreateConnectionDto) {
    return this.connectionService.create(createConnectionDto);
  }

  @Get()
  findAll() {
    return this.connectionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.connectionService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateConnectionDto: UpdateConnectionDto) {
    return this.connectionService.update(id, updateConnectionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.connectionService.remove(id);
  }

  @Post(':id/reconnect')
  reconnect(@Param('id') id: string) {
    return this.connectionService.reconnect(id);
  }

  @Get(':id/status')
  getStatus(@Param('id') id: string) {
    return this.connectionService.getStatus(id);
  }
}
