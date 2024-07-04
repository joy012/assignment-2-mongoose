import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import router from './app/routes';

const app: Application = express();

app.use(cors());
app.use(express.json());

// api routes
app.use('/api', router);

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to the Assignement - 2 Server!');
});

// not found error handle
app.use('*', (req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: 'Route not found',
  });
});

export default app;
