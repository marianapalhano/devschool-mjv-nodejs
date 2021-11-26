import { Router, Request, Response } from 'express';
import { Student } from '../models/student.model';

const router = Router();

const students: Array<Student> = [ 
    { id: 1, name: 'Maria', email: 'maria@gmail.com', password: '123456', fee: 350, inclusion: new Date() }, 
    { id: 2, name: 'Lucas', email: 'lucas@gmail.com', password: '123456', fee: 250, inclusion: new Date() }, 
    { id: 3, name: 'Bruno', email: 'bruno@gmail.com', password: '123456', fee: 300, inclusion: new Date() }, 
    { id: 4, name: 'Ana', email: 'ana@gmail.com', password: '123456', fee: 280, inclusion: new Date() }
];

// GET
router.get('/', (req: Request, res: Response) => {
    res.status(200).send(students);
});

router.get('/id/:id', (req: Request, res: Response) => {
    const student = students.find(student => student.id === parseInt(req.params.id));
    if (student) {
        res.status(200).send(student);
    } else {
        res.status(404).send({ message: 'Estudante não encontrado'});
    }
});

// POST

export default router;