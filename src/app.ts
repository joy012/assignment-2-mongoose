import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import { errorHandlerMiddleware } from './app/middleware/errorHandlerMiddleware';
import { notFoundMiddleware } from './app/middleware/notFoundMiddleware';
import router from './app/routes';

const app: Application = express();

app.use(cors());
app.use(express.json());

// api routes
app.use('/api', router);

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to the Assignement - 2 Server!');
});

// global error handler middleware
app.use(errorHandlerMiddleware);

// not found error handler middleware
app.use(notFoundMiddleware);

export default app;
