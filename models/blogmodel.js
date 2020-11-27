import mongoose from "mongoose";
const { Schema, model } = mongoose;
import slugify from "slugify";

const blogSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "a blog must have a name"],
      trim: true,
    },
    slug: {
      type: String,
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
      enum: {
        values: ["tech", "mobile", "pc"],
        message: "Blog category can only include tech,mobile and pc",
      },
    },
  },
  {
    timestamps: true,
  }
);

// adding pre save hooks

blogSchema.pre("save", function (next) {
  this.slug = slugify(this.title, { lower: true });
  next();
});

export const Blog = model("Blog", blogSchema);
