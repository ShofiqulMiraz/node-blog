import express from "express";
import morgan from "morgan";
import cors from "cors";
import { blogRouter } from "./routes/blogRoutes.js";
import { userRouter } from "./routes/userRoutes.js";
import { appError } from "./utils/appError.js";
import { globalErrorHandler } from "./controllers/errorcontroller.js";
export const app = express();

// middlewares
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

// routes middleware
app.use("/api/v1/blogs", blogRouter);
app.use("/api/v1/users", userRouter);

// handling unhandled routes

app.all("*", (req, res, next) => {
  next(new appError(`Can't find ${req.originalUrl} on this server`, 400));
});

app.use(globalErrorHandler);
