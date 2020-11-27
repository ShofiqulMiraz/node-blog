import { Blog } from "../models/blogmodel.js";
import { APIFeature } from "../utils/apiFeatures.js";
import { catchAsync } from "../utils/catchAsync.js";

// create new Blog

export const createBlog = catchAsync(async (req, res, next) => {
  const blog = await Blog.create(req.body);
  res.status(201).json({
    status: "success",
    blog,
  });
});

// get All Blogs From Database

export const getAllBlogs = catchAsync(async (req, res, next) => {
  const features = new APIFeature(Blog.find(), req.query)
    .filter()
    .sort()
    .limitFields()
    .paginate();

  const blogs = await features.query;

  res.status(200).json({
    status: "success",
    results: blogs.length,
    blogs,
  });
});

// get a single blog with specified id from database

export const getSingleBlog = catchAsync(async (req, res, next) => {
  const blog = await Blog.findById(req.params.id);
  res.status(200).json({
    status: "success",
    blog,
  });
});

// update a requested blog

export const updateSingleBlog = catchAsync(async (req, res, next) => {
  const blog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  res.status(200).json({
    status: "success",
    blog,
  });
});

// delete e requested blog
export const deleteSingleBlog = catchAsync(async (req, res, next) => {
  await Blog.findByIdAndDelete(req.params.id);
  res.status(204).json({
    status: "success",
    data: null,
  });
});
