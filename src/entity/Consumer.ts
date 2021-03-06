import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Consumer {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    age: number;

}
