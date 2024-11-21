import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import surveyRoutes from './routes/surveyRoutes.js';

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

app.use('/api', surveyRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});