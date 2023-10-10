import { Schema, model } from 'mongoose'

const ToDoSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: String,
  dueDate: Date,
  completed: {
    type: Boolean,
    default: false
  }
})

const ToDo = model('ToDo', ToDoSchema)

export default ToDo
