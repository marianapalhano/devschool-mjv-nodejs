import { Student } from '../models/student.model';
import { StudentRepository } from '../repositories/students.repository';

export class StudentsService {

    constructor() {}

    getAll() {
        return StudentRepository.getAll();
    }

    getById(id: number) {
        return StudentRepository.getById(id);
    }

    create(student:Student) {
        return StudentRepository.create(student);
    }

    async update(name: string, email: string, id: string) {
        const student = await StudentRepository.getById(parseInt(id));
        if (student) {
            await StudentRepository.update(parseInt(id), { name, email });
            return true;
        } else {
            return false;
        }
    }

    async remove(id: string) {
        const student = await StudentRepository.getById(parseInt(id));
        if (student) {
            await StudentRepository.remove(parseInt(id));
            return true;
        } else {
            return false;
        }
    }
}