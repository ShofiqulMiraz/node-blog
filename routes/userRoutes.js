import express from "express";
import { getUsers } from "../controllers/usercontroller.js";

export const userRouter = express.Router();

userRouter.route("/").get(getUsers);
userRouter.route("/:id").get(getUsers);
