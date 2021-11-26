import { Router, Request, Response } from 'express';
import { request } from 'http';
import { Student } from '../models/student.model';

const router = Router();

const students: Array<Student> = [ 
    { id: 1, name: 'Maria', email: 'maria@gmail.com', password: '123456', fee: 350, inclusion: new Date() }, 
    { id: 2, name: 'Lucas', email: 'lucas@gmail.com', password: '123456', fee: 250, inclusion: new Date() }, 
    { id: 3, name: 'Bruno', email: 'bruno@gmail.com', password: '123456', fee: 300, inclusion: new Date() }, 
    { id: 4, name: 'Ana', email: 'ana@gmail.com', password: '123456', fee: 280, inclusion: new Date() }
];

// GET -------------------------------------------------------------------------------------
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

// POST  ------------------------------------------------------------------------------------
router.post('/create', (req: Request, res: Response) => {
    const nextId = (students[(students.length - 1)].id + 1);
    const student = req.body;
    student.id = nextId;
    student.inclusion = new Date();
    students.push(student);
    res.status(201).send(student);
});

// PUT -------------------------------------------------------------------------------------
router.put('update/:id', (req: Request, res: Response) => {
    const partialStudent = req.body;
    const student = students.find(student => student.id === parseInt(req.params.id));
    if(!student) {
        res.status(404).send({ message: 'Estudante não encontrado' });
    } else {
        student.name = partialStudent.name;
        student.email = partialStudent.email;
        res.status(200).send('');
    }
    console.log(partialStudent);    
});

// DELETE ----------------------------------------------------------------------------------
router.delete('/remove/:id', (req: Request, res: Response) => {
    const id = req.params.id;
    const studentIndex = students.findIndex(student => student.id === parseInt(req.params.id));
    if (studentIndex === -1) {
        res.status(404).send({ message: 'Estudante não encontrado' });
    } else {
        students.splice(studentIndex, 1);
    }
});

export default router;