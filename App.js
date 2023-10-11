import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import mongoose from 'mongoose';
import { } from 'dotenv/config';
import router from './src/routes/todo.js'

mongoose.connection.on('error', (error) => {
  console.error({ error });
});
mongoose.connection.on('disconnected', (error) => {
  console.log('database has been disconnected');
});
mongoose.connection.on('connected', () => {
  console.log('Connected to DB!');
});

const database = async () =>{
  try {
    await mongoose.connect(process.env.MONGO_URI);
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
};

const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use('/api',router )


const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Running: ${PORT}`);
});
