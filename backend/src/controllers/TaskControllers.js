import { TaskModel } from "../models/TaskModel.js";


export const createTask = async  (req, res) => {
  const { title, description, priority, status,assignedTo} = req.body;
  const id = req.user._id;
//   console.log(req.user._id);
  if (!title || !description || !priority || !status) {
    return res.status(400).json({ error: 'Please fill in all required fields' });
  }

  try {
    const task = new TaskModel({ title, description, priority, status, assignedTo : id } );
    await task.save();
    res.status(201).json({ message: 'Task created successfully',task });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const getFilterTasks = async  (req, res) => {
  const { priority, status, assignedTo } = req.query;
  const filter = {};
  if (priority) {
    filter.priority = priority;
  }
  if (status) {
    filter.status = status;
  }
  if (assignedTo) {
    filter.assignedTo = assignedTo;
  }

  try {
    const tasks = await TaskModel.find(filter).populate('assignedTo');
    res.status(200).json(tasks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const getTaskById = async (req, res) => {
  const { id } = req.params;

  try {
    const task = await TaskModel.findById(id).populate('assignedTo');
    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }
    res.status(200).json(task);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const updateTask = async (req, res) => {
  const { id } = req.params;
  try {
    const task = await TaskModel.findByIdAndUpdate(id, req.body, { new: true });
    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }
    res.status(200).json({ message: 'Task updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const deleteTask = async (req, res) => {
  const { id } = req.params;
  try {
    await TaskModel.findByIdAndRemove(id);
    res.status(200).json({ message: 'Task deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};