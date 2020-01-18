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
      <ul className="pagination">
        {blogContext.hasPreviousPage ? (
          <li>
            <a onClick={blogContext.getPrevious}>
              <i className="material-icons">chevron_left</i>
            </a>
          </li>
        ) : (
          <div />
        )}
        {blogContext.hasNextPage ? (
          <li className="waves-effect">
            <a onClick={blogContext.getNext}>
              <i className="material-icons">chevron_right</i>
            </a>
          </li>
        ) : (
          <div />
        )}
      </ul>
      <div className="row">
        {blogContext.blogs.map((blog, index, blogs) => {
          return (
            <BlogItem
              className="scale-transition"
              key={index + blog._id}
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
