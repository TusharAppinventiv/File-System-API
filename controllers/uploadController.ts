import { Request, Response, NextFunction } from 'express';
import { uploadService } from '../services/uploadService';

export const uploadController = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const file = req.file;
    if (!file) {
      const error = new Error('Please upload a file');
      return next(error);
    }
    await uploadService(file);
    res.send('File uploaded successfully');
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

