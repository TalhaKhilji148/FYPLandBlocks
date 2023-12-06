const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
  {
    currentOwner: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      // required: true,
    },
    title: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    technology: {
      type: String,
      required: true,
    },
    img: {
      type: String, // Assuming you'll store the base64 representation of the image
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    authorinfo: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
    subdescription: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;
