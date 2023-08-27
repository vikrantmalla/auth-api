import express from "express";
import {
  authUser,
  registerUser,
  getUserProfile,
  updateUserProfile,
  logoutUser,
} from "../controllers/userController.js";

const router = express.Router();

router.post("/", registerUser);
router.post("/auth", authUser);
router.get("/profie", getUserProfile);
router.put("/profie", getUserProfile);
router.post("/logout", logoutUser);

export default router;
