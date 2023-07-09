import fs from 'fs';
import { promisify } from 'util';

const writeFileAsync = promisify(fs.writeFile);

export const uploadService = async (file: Express.Multer.File): Promise<void> => {
  const { originalname, buffer } = file;
  await writeFileAsync(`uploads/${originalname}`, buffer);
};
