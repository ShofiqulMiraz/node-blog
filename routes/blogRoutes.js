import express from "express";
import {
  createBlog,
  deleteSingleBlog,
  getAllBlogs,
  getSingleBlog,
  updateSingleBlog,
} from "../controllers/blogcontroller.js";

export const blogRouter = express.Router();

blogRouter.route("/").get(getAllBlogs).post(createBlog);
blogRouter
  .route("/:id")
  .get(getSingleBlog)
  .patch(updateSingleBlog)
  .delete(deleteSingleBlog);
