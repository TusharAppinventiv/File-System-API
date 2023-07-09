import { Router } from 'express';
import { uploadController } from '../controllers/uploadController';
import { uploadMiddleware } from '../middlewares/uploadMiddleware';

const router = Router();

router.post('/', uploadMiddleware, uploadController);

export { router as uploadRoutes };

