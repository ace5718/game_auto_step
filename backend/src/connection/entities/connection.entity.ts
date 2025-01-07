import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Simulator } from '../../simulator/entities/simulator.entity';

@Entity()
export class Connection {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  type: string;

  @Column()
  target: string;

  @Column('json')
  options: object;

  @Column({ default: 'disconnected' })
  status: string;

  @ManyToOne(() => Simulator, simulator => simulator.connections)
  simulator: Simulator;
}
