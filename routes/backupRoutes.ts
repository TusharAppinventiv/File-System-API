import { Router } from 'express';
import { backupController } from '../controllers/backupController';

const router = Router();

router.get('/:filename', backupController);

export { router as backupRoutes };
