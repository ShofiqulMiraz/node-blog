import express from "express";
import morgan from "morgan";
import cors from "cors";
import { blogRouter } from "./routes/blogRoutes.js";
import { userRouter } from "./routes/userRoutes.js";
export const app = express();

// middlewares
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());



// routes middleware
app.use("/api/v1/blogs", blogRouter);
app.use("/api/v1/users", userRouter);
