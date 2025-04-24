import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('board')
export class Board {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  title: string;

  @Column()
  content: string;
}
