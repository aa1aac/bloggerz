const Blog = require("../models/Blog");
const User = require("../models/User");

const getBlogs = (req, res) => {
  // todo get all blogs
  // todo pagination optimization
  const BLOGS_PER_PAGE = 5;

  const page = +req.query.page || 1;
  let totalBlogs;

  Blog.find()
    .countDocuments()
    .then(numBlogs => {
      totalBlogs = numBlogs;
      return Blog.find({}, "-content")
        .skip((page - 1) * BLOGS_PER_PAGE)
        .limit(BLOGS_PER_PAGE);
    })
    .then(blogs => {
      res.json({
        blogs,
        currentPage: page,
        hasNextPage: BLOGS_PER_PAGE * page < totalBlogs,
        hasPreviousPage: page > 1,
        nextPage: page + 1,
        previousPage: page - 1,
        lastPage: Math.ceil(totalBlogs / BLOGS_PER_PAGE)
      });
    })
    .catch(err => {
      res.json({ msg: "some error occured" });
    });

  // Blog.find({})
  //   .then(result => {
  //     res.json({ blogs: result });
  //   })
  //   .catch(() => {
  //     res.json({ msg: "some error occured" });
  //   });
  // res.json({ msg: "get blogs" });
};

const postBlog = async (req, res) => {
  // todo no duplicates

  const { title, lead, content } = req.body;
  if (!title && !lead && !content)
    return res.json({ msg: "none of th efields can be empty" });
  try {
    const blog = await new Blog({
      title,
      lead,
      content,
      _author: req.payload.id
    });
    await blog.save();
    res.json({ msg: "successfully saved the post " });
  } catch (error) {
    res.json({ msg: "some error occured saving the post try again later!" });
  }
};

const editBlog = (req, res) => {
  // todo edit blogs
  res.json("edit blogs");
};

const deleteBlog = (req, res) => {
  // todo delete blogs
  res.json("deleteBlog");
};

const getSpecificBlog = (req, res) => {
  Blog.findById(req.params.id)
    .then(blog => {
      if (!blog) return res.status(404);
      res.json(blog);
    })
    .catch(error => {
      res.status(404).json({ msg: "no such page found" });
    });
};

const getUserSpecific = (req, res) => {
  Blog.find({ _author: req.payload.id }).then(blogs => {
    if (!blogs) {
      return res.json({ msg: "no blogs exist" });
    } else {
      return res.json({ blogs });
    }
  });
};

module.exports = {
  getBlogs,
  postBlog,
  editBlog,
  deleteBlog,
  getSpecificBlog,
  getUserSpecific
};
