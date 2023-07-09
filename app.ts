import express, { Application } from 'express';
import { mergeRoutes } from './routes/mergeRoutes';
import { backupRoutes } from './routes/backupRoutes';
import { uploadRoutes } from './routes/uploadRoutes';

class App {
  public app: Application;

  constructor() {
    this.app = express();
    this.config();
    this.routes();
  }

  private config(): void {
    this.app.use(express.json());
  }

  private routes(): void {
    this.app.use('/api/merge', mergeRoutes);
    this.app.use('/api/backups', backupRoutes);
    this.app.use('/api/upload', uploadRoutes);
  }

  public listen(port: number): void {
    this.app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  }
}

const app = new App();
app.listen(3009);

