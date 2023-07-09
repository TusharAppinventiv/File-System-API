import fs from 'fs';
import { promisify } from 'util';

const readFileAsync = promisify(fs.readFile);

export const backupService = async (filename: string): Promise<string> => {
  const filePath = `backups/${filename}`;

  const data = await readFileAsync(filePath, 'utf8');

  return data;
};
