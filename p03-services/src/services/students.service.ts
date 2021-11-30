import { Student } from '../models/student.model';

export class StudentsService {
    students: Array<Student> = [ 
        { id: 1, name: 'Maria', email: 'maria@gmail.com', password: '123456', fee: 350, inclusion: new Date() }, 
        { id: 2, name: 'Lucas', email: 'lucas@gmail.com', password: '123456', fee: 250, inclusion: new Date() }, 
        { id: 3, name: 'Bruno', email: 'bruno@gmail.com', password: '123456', fee: 300, inclusion: new Date() }, 
        { id: 4, name: 'Ana', email: 'ana@gmail.com', password: '123456', fee: 280, inclusion: new Date() }
    ];

    constructor() {}

    getAll() {
        return this.students;
    }

    getById(id: number) {
        return this.students.find(student => student.id === id);
    }

    create(student:Student) {
        student.id = this.generateNextId();
        student.inclusion = new Date();
        this.students.push(student);
        return student;
    }

    update(name: string, email: string, id: string) {
        const student = this.students.find(student => student.id === parseInt(id));
        if (student) {
            student.name = name;
            student.email = email;
            return true;
        } else {
            return false;
        }
    }

    remove(id: string) {
        const studentIndex = this.students.findIndex(student => student.id === parseInt(id));
        if (studentIndex > -1) {
            this.students.splice(studentIndex, 1);
            return true;
        } else {
            return false;
        }
    }

    generateNextId() {
        return this.students[(this.students.length - 1)].id + 1;
    }
}