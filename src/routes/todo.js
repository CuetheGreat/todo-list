import { Router } from 'express';
import todoController from '../controllers/ToDo';

const router = Router()

router.get('/todos',todoController.getAll)
router.get('/todos/:id',todoController.getByID)
router.post('/todos',todoController.createTodo)
router.put('/todos/:id', todoController.editToDo)
router.delete('/todos/:id',todoController.deleteTodo)

export default router