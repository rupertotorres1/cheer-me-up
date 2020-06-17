import { Router } from 'express';
import achievementsRouter from './achievements';
import authRouter from './auth';
import { ensureAuthenticated } from '../controllers/auth';

const router = Router();

router.use('/achievements', ensureAuthenticated, achievementsRouter);
router.use('/auth', authRouter);

export default router;
