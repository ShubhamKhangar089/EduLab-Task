import express from 'express';
import { createTask, deleteTask, getFilterTasks, getTaskById, updateTask } from '../controllers/TaskControllers.js';
import { isAuth } from '../middlewares/AuthMiddleware.js';

const taskRouter = express.Router();

//addTask
taskRouter.post('/add',isAuth(['Admin', 'User']), createTask);

//updateTask
taskRouter.patch('/update/:id',isAuth(['Admin', 'User']), updateTask);

//getFilteredTask
taskRouter.get('/get',isAuth(['Admin', 'User']), getFilterTasks);

//getTaskById
taskRouter.get('/get/:id',isAuth(['Admin', 'User']), getTaskById);

//only-admin-delete-task
taskRouter.delete('/update/:id',isAuth(['Admin']), deleteTask);

export default taskRouter;