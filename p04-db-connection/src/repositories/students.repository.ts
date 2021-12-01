import { getConnection } from "typeorm";
import { StudentEntity } from "../entities/students.entity";
import { Student } from "../models/student.model";

export class StudentRepository {
    public static getAll() {
        return getConnection()
        .getRepository(StudentEntity)
        .find();
    }

    public static getById(id: number) {
        return getConnection()
        .getRepository(StudentEntity)
        .findOne({ id });
    }

    public static create(student: Partial<Student>) {
        return getConnection()
        .getRepository(StudentEntity)
        .insert(student);
    }

    public static update(id: number, student: Partial<Student>) {
        return getConnection()
        .getRepository(StudentEntity)
        .update({ id }, student);
    }

    public static remove(id: number) {
        return getConnection()
        .getRepository(StudentEntity)
        .delete({ id });
    }
}