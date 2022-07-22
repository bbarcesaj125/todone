import { Entity, PrimaryGeneratedColumn, Column, Unique } from "typeorm";

@Entity()
@Unique(["title"])
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 40,
  })
  title: string;

  @Column({
    length: 200,
    nullable: true,
  })
  description: string;

  @Column()
  complete: boolean;
}
