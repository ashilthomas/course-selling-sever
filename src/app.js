import express from 'express';
import cookieParser from 'cookie-parser';
import  connectDb  from '../config/db.js'; // Assuming db.js exports a named function 'connectDb'
import userRouter from '../routes/userRoute.js';

const app = express();
const port = 3002;

app.use(express.json());
app.use(cookieParser());
app.use('/api/v1', userRouter);

connectDb();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
