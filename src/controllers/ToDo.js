import ToDo from '../models/todo';

const todoController = {
  createTodo: async (req, res) => {
    try {
      const todo = new ToDo({
        title: req.body.title,
        description: req.body.description,
        dueDate: req.body.dueDate,
      });
      await todo.save();
      res.json(todo);
    } catch (error) {
      res.status(500).json({ error: 'Internal servor error' });
    }
  },

  getAll: async (req, res) => {
    try {
      const todos = await ToDo.find();
      res.json(todos);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  getByID: async (req, res) => {
    try {
      const todo = await ToDo.findById(req.params.id);
      res.json(todo);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  editToDo: async (req, res) => {
    try {
      let todo = await ToDo.findById(req.params.id);
      if (!todo) return res.status(404).json({ error: 'ToDo not found' });
      const { description, title, dueDate } = todo;
      todo.description = req.body.description || description;
      todo.dueDate = req.body.dueDate || dueDate;
      todo.title = req.body.title || title;
      await todo.save();
      res.json({
        ...todo,
        dateUpdated: Date.now(),
      });
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  deleteTodo: async (req, res) => {
    try {
      const todo = await ToDo.findByIdAndDelete(req.params.id);
      if (!todo) return res.status(404).json({ error: 'ToDo not foun' });
      res.json({
        message: `${todo.title} has been deleted successfully!`,
      });
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  },
};

export default todoController
