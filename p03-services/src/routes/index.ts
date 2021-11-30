import { Router } from 'express';
import studentRoutes from './students.routes';

const router = Router();

router.use('/students', studentRoutes);

export default router;