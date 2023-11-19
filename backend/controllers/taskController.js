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
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }
  res.status(200).json({ message: "Set task" });
});

// @desc    Update Task
// @route   PUT /api/tasks/:id
// @access  Private
const updateTask = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Delete task" });
});

// @desc    Delete Task
// @route   DELETE /api/tasks/:id
// @access  Private
const deleteTask = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Update task" });
});

export { getTasks, setTask, updateTask, deleteTask };
