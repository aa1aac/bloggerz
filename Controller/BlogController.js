const Blog = require("../models/Blog");
const User = require("../models/User");

const getBlogs = async (req, res) => {
  // todo get all blogs
  const BLOGS_PER_PAGE = 5;

  const page = +req.query.page || 1;
  let totalBlogs;
  try {
    totalBlogs = await Blog.find().countDocument();
  let blogs = await Blog.find().skip((page-1) * BLOGS_PER_PAGE).limit(BLOGS_PER_PAGE);

  res.json({
    currentPage:page,
    hasNextPage: BLOGS_PER_PAGE * page < totalBlogs,
    hasPreviousPage: page > 1,
    nextPage: page + 1,
    previousPage: page - 1,
    msg:'data fetched',
    blogs
  })
  } catch (error) {
    res.status(500).json({msg:'some error occured fetching the data'})
  }
  
  
};

const postBlog = async (req, res) => {
  // todo no duplicates
  
  const { title, lead, content } = req.body;
    try {
      const blog = await new Blog({ title, lead, content, _author:req.payload.id });
      await blog.save()
      res.json({msg:'successfully saved the post '});
    } catch (error) {
      res.json({msg:'some error occured saving the post try again later!'})
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

module.exports = { getBlogs, postBlog, editBlog, deleteBlog };
