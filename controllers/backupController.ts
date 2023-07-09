import { Request, Response, NextFunction } from 'express';
import { backupService } from '../services/backupService';

export const backupController = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { filename } = req.params;

    const data = await backupService(filename);

    res.status(200).send(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
