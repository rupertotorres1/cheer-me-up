import { Router } from 'express';
import achievementsRouter from './achievements';

const router = Router();

router.use('/achievements', achievementsRouter);

export default router;
