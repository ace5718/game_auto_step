import { IsString, IsNotEmpty, IsObject } from 'class-validator';

export class CreateSimulatorDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  type: string;

  @IsObject()
  @IsNotEmpty()
  config: object;
}
