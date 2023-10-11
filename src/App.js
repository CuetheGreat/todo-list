import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { } from 'dotenv/config';
import todoRouter from './routes/todo';

const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use('/api', todoRouter)


export default app
