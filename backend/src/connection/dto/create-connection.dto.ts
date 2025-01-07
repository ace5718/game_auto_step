import { IsString, IsNotEmpty, IsObject } from 'class-validator';

export class CreateConnectionDto {
  @IsString()
  @IsNotEmpty()
  type: string;

  @IsString()
  @IsNotEmpty()
  target: string;

  @IsObject()
  @IsNotEmpty()
  options: object;
}
