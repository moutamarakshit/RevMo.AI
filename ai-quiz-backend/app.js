import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import generateRoute from './routes/generate.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;


app.use(cors({
  origin: "http://localhost:5173",
}));
app.use(bodyParser.json());


app.use('/', generateRoute);  

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});