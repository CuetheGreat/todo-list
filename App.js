import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import mongoose from 'mongoose';
import {} from 'dotenv/config';

mongoose.connection.on('error', (error) => {
  console.error({ error });
});
mongoose.connection.on('disconnected', (error) => {
  console.log({ error: 'database has been disconnected' });
});
mongoose.connection.on('connected', () => {
  console.log('Connected to DB!');
});

const db = async () => {
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

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  db();
  console.log(`Running: ${PORT}`);
});
