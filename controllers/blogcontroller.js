import { Blog } from "../models/blogmodel.js";
import { APIFeature } from "../utils/apiFeatures.js";

// create new Blog

export const createBlog = async (req, res) => {
  try {
    const blog = await Blog.create(req.body);
    res.status(201).json({
      status: "success",
      blog,
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error,
    });
  }
};

// get All Blogs From Database

export const getAllBlogs = async (req, res) => {
  try {
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
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error,
    });
  }
};

// get a single blog with specified id from database

export const getSingleBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    res.status(200).json({
      status: "success",
      blog,
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error,
    });
  }
};

// update a requested blog

export const updateSingleBlog = async (req, res) => {
  try {
    const blog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: "success",
      blog,
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error,
    });
  }
};

// delete e requested blog

export const deleteSingleBlog = async (req, res) => {
  try {
    await Blog.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error,
    });
  }
};
