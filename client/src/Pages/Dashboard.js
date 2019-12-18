import React, { useContext, useEffect } from "react";

import AddBtn from "../components/layout/AddBtn";
import BlogContext from "../context/blog/BlogContext";
import DashboardBlogItem from "../components/Blog/DashboardBlogItem";

export const Dashboard = () => {
  const blogContext = useContext(BlogContext);
  useEffect(() => {
    blogContext.getSpecific();
  }, []);

  return (
    <div className="container">
      <h5 className="center-align green-text text-accent-3">Dashboard</h5>
      <h1>Hi</h1>
      <h3>Super Blogger</h3>
      {blogContext.userSpecific.map((blog, index, blogs) => {
        return (
          
            <DashboardBlogItem
              title={blog.title}
              key={blog._id}
              lead={blog.lead}
              content={blog.content}
              id={blog._id}
            />
         
        );
      })}
      <AddBtn />
    </div>
  );
};

export default Dashboard;
