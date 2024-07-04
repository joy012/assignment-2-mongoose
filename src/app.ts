import cors from 'cors';
import express, { Application } from 'express';
import router from './app/routes';

export const app: Application = express();

app.use(express.json());
app.use(cors);

app.use('/api', router);
