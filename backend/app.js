import express from 'express';
import cors from 'cors';
import router from ''
const app = express();
const PORT = 3001;


app.use(cors());


app.use(express.json());
app.use('/', router);

export default app