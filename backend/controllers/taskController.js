import asyncHandler from "express-async-handler";


const getTasks = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "this is task route" });
});

export { getTasks };
