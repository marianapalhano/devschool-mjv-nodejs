import { Router, Request, Response } from 'express';
import { StudentsService } from '../services/students.service';

const router = Router();

const studentsService = new StudentsService();

// GET -------------------------------------------------------------------------------------
router.get('/', (req: Request, res: Response) => {
    const students = studentsService.getAll();
    res.status(200).send(students);
});

router.get('/id/:id', (req: Request, res: Response) => {
    const student = studentsService.getById(parseInt(req.params.id));
    if (student) {
        res.status(200).send(student);
    } else {
        res.status(404).send({ message: 'Estudante não encontrado'});
    }
});

// POST  ------------------------------------------------------------------------------------
router.post('/create', (req: Request, res: Response) => {    
    const student = req.body;
    const createdStudent = studentsService.create(student);
    res.status(201).send(createdStudent);
});

// PUT -------------------------------------------------------------------------------------
router.put('/update/:id', (req: Request, res: Response) => {
    const partialStudent = req.body;
    const updateResult = studentsService.update(partialStudent.name, partialStudent.email, req.params.id);
    if(updateResult) {
        res.status(200).send(updateResult);        
    } else {
        res.status(404).send({ message: 'Estudante não encontrado' });
    }
});

// DELETE ----------------------------------------------------------------------------------
router.delete('/remove/:id', (req: Request, res: Response) => {
    const id = req.params.id;
    const removeResult = studentsService.remove(id);
    if (removeResult) {
        res.status(200).send({ message: 'Estudante excluído com sucesso' });        
    } else {
        res.status(404).send({ message: 'Estudante não encontrado' });
    }
});

export default router;