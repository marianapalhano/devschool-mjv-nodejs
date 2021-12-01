import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'students' })
export class StudentEntity {

    @PrimaryGeneratedColumn({ name: 'id' })
    id?: number;

    @Column({ name: 'name', type: 'varchar', length: 100 })
    name?: string;

    @Column({ name: 'email', type: 'varchar', length: 50 })
    email?: string;

    @Column({ name: 'password', type: 'varchar', length: 10 })
    password?: string;

    @Column({ name: 'fee', type: 'smallint' })
    fee?: number;

    @Column({ name: 'inclusion', type: 'date' })
    inclusion?: Date | string;
}