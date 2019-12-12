const Blog = require("../models/Blog");
const User = require("../models/User");

const getBlogs = (req, res) => {
  // todo get all blogs
  res.json("get all blogs");
};

const postBlog = (req, res) => {
  // todo post blogs
  console.log(req.payload);

  res.json("post blogs");
};

const editBlog = (req, res) => {
  // todo edit blogs
  res.json("edit blogs");
};

const deleteBlog = (req, res) => {
  // todo delete blogs
  res.json("deleteBlog");
};

module.exports = { getBlogs, postBlog, editBlog, deleteBlog };
