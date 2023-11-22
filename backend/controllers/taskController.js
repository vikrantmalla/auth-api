import asyncHandler from "express-async-handler";
import Task from "../models/taskModel.js";

// @desc    Get Task
// @route   GET /api/tasks
// @access  Private
const getTasks = asyncHandler(async (req, res) => {
  const tasks = await Task.find({ user: req.user.id });

  res.status(200).json(tasks);
});

// @desc    Set Task
// @route   POST /api/tasks
// @access  Private
const setTask = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }

  const task = await Task.create({ text: req.body.text });

  res.status(200).json({ task });
});

// @desc    Update Task
// @route   PUT /api/tasks/:id
// @access  Private
const updateTask = asyncHandler(async (req, res) => {
  const task = await Task.findById(req.params.id);

  if (!task) {
    res.status(400);
    throw new Error("Task not found");
  }

  const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json({ updatedTask });
});

// @desc    Delete Task
// @route   DELETE /api/tasks/:id
// @access  Private
const deleteTask = asyncHandler(async (req, res) => {
  const task = await Task.findById(req.params.id);

  if (!task) {
    res.status(400);
    throw new Error("Task not found");
  }

  await task.deleteOne();

  res.status(200).json({ id: req.params.id });
});

export { getTasks, setTask, updateTask, deleteTask };
