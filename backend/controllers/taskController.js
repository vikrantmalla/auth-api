import asyncHandler from "express-async-handler";

// @desc    Get Task
// @route   GET /api/tasks
// @access  Private
const getTasks = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "this is task route" });
});

// @desc    Set Task
// @route   POST /api/tasks
// @access  Private
const setTask = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "this is task route" });
});

// @desc    Update Task
// @route   PUT /api/tasks/:id
// @access  Private
const updateTask = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "this is task route" });
});

// @desc    Delete Task
// @route   DELETE /api/tasks/:id
// @access  Private
const deleteTask = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "this is task route" });
});

export { getTasks, setTask, updateTask, deleteTask };
