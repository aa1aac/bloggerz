import React, { useContext, useEffect } from "react";

import BlogContext from "../../context/blog/BlogContext";
import BlogItem from "./BlogItem";

const Blog = () => {
  const blogContext = useContext(BlogContext);
  useEffect(() => {
    blogContext.getBlog();
  }, []);

  return (
    <div className="container">
      <div className="row">
        {blogContext.blogs.map((blog, index, blogs) => {
          return (
            <BlogItem
              title={blog.title}
              lead={blog.lead}
              content={blog.content}
              id={blog._id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Blog;
