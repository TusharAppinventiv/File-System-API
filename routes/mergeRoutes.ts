import { Router } from 'express';
import { mergeController } from '../controllers/mergeController';

const router = Router();

router.post('/', mergeController);

export { router as mergeRoutes };
