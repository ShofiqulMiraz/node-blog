import mongoose from "mongoose";
const { Schema, model } = mongoose;

const blogSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "a blog must have a name"],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "a blog must have a description"],
    },
    author: {
      type: String,
      required: [true, "a blog must have a author"],
      trim: true,
    },
    category: {
      type: String,
      default: "tech",
    },
  },
  {
    timestamps: true,
  }
);

export const Blog = model("Blog", blogSchema);
