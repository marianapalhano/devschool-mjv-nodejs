import {createConnection } from "typeorm";
import { StudentEntity } from "../entities/students.entity";

export const connection = createConnection({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "root",
    database: "students",
    logging: true,
    entities: [StudentEntity]
});