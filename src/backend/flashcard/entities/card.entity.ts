import { BaseEntity, Column, Entity, PrimaryColumn } from "typeorm";

@Entity("card")
export class Card extends BaseEntity {
  @PrimaryColumn("uuid")
  id: string;

  @Column("varchar")
  question: string;

  @Column("varchar")
  answer: string;

  @Column("varchar")
  topic: string;

  @Column({ type: "int", default: 0 })
  rank: number;

  @Column({ type: "int", default: Date.now() })
  createdAt!: number;

  @Column({ type: "int", default: Date.now() })
  updatedAt!: number;
}
