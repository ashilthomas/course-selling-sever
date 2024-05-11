import express from 'express';
import cookieParser from 'cookie-parser';
import  connectDb  from '../config/db.js'; 
import userRouter from '../routes/userRoute.js';

import dotenv from "dotenv";
import instructorRouter from '../routes/instructorRoute.js';


dotenv.config();

const app = express();
const port = 3002;

app.use(express.json());
app.use(cookieParser());
app.use('/api/v1', userRouter);

app.use('/api/v1/instructor',instructorRouter)

connectDb();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
