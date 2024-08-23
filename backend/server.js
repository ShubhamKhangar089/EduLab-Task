import express from 'express';
import { connectToDB } from './src/configs/db.js';
import dotenv from 'dotenv';
import userRouter from './src/routers/UserRouter.js';
import taskRouter from './src/routers/TaskRouter.js';
dotenv.config();

const app = express();
app.use(express.json());


const port = process.env.PORT || 8080;
const uri = process.env.URI;

//userRoute
app.use('/api/v1/user', userRouter);

//taskRouter
app.use('/api/v1/task', taskRouter);


app.listen(port, async () => {
  try {
    await connectToDB(uri);
    console.log(`Server is running on port ${port}`);
  } catch (error) {
    console.log('Error:', error);
    process.exit(1); // Exit the process if the database connection fails
  }
});
