import app from './src/App';
import database from './src/config/database';

database();
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Running: ${PORT}`);
});
