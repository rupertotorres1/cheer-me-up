import { Router } from 'express';
import { googleSignIn, googleCallback } from '../controllers/auth';

const router = Router();

router.get('/google', googleSignIn);
router.get('/google/callback', googleCallback);

export default router;
