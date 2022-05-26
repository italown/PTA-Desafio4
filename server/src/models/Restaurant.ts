import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Restaurant {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    adress: string

    @Column()
    name: string

    @Column()
    typeFood: string
}