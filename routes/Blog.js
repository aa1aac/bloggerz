const express = require("express");

const BlogController = require("../Controller/BlogController");
const isAuth = require("../middleware/isAuth");

const router = express.Router();

// request GET provide the blogs
// public
// Route api/blog/
router.get("/", BlogController.getBlogs);

// request POST post a blog
// private
// route api/blog/
router.post("/", isAuth, BlogController.postBlog);

// request PUT edit the blog
// private
// route api/blog/:id
router.put("/:id", isAuth, BlogController.editBlog);

// request DELETE delete blog
// private
// route api/blog/:id
router.delete("/:delete", isAuth, BlogController.deleteBlog);

module.exports = router;
