import express from "express";
import { signup } from "../controllers/userController.js";
const userRouter = express.Router();
// import userController from "../../controllers/userController.js";

userRouter.post("/signup", signup);

export default userRouter;
