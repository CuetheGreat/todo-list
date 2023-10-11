import mongoose from 'mongoose';

mongoose.connection.on('error', (error) => {
  console.error({ error });
});
mongoose.connection.on('disconnected', (error) => {
  console.log('database has been disconnected');
});
mongoose.connection.on('connected', () => {
  console.log('Connected to DB!');
});

const database = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
};

export default database
