import express from "express";
import {
  deleteTask,
  getTasks,
  setTask,
  updateTask,
} from "../controllers/taskController.js";

const router = express.Router();

router.get("/", getTasks);
router.post("/", setTask);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);

export default router;
