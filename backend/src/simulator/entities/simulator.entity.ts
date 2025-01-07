import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Simulator {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  type: string;

  @Column('json')
  config: object;

  @Column({ default: 'stopped' })
  status: string;
}
