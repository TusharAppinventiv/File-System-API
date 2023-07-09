import { Request, Response, NextFunction } from 'express';
import { mergeService } from '../services/mergeService';

export const mergeController = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { file1, file2 } = req.body;

    const mergedFileName = await mergeService(file1, file2);

    res.status(200).json({
      message: 'Files merged successfully',
      fileName: mergedFileName,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
