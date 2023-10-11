import { Router } from 'express';
// @ts-ignore
import todoController from '../controllers/todo';

const todoRouter = Router();

todoRouter.get('/todos', todoController.getAll);
todoRouter.get('/todos/:id', todoController.getByID);
todoRouter.post('/todos', todoController.createTodo);
todoRouter.put('/todos/:id', todoController.editToDo);
todoRouter.delete('/todos/:id', todoController.deleteTodo);

export default todoRouter;
