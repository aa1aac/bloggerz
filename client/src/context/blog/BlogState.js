import React, { useReducer } from "react";
import axios from "axios";

import BlogReducer from "./BlogReducer";
import BlogContext from "./BlogContext";

export const BlogState = () => {
  // set an intital state
  const initialState = {
    blogs: [],
    newBlog: [],
    userSpecific: [],
    editBlog: ""
  };
  //  use reducer for accessing state and dispatch function

  const [state, dispatch] = useReducer(BlogReducer, initialState);

  const postBlog = (title, lead, text) => {
    // todo post the blog
  };

  // get blog functionality
  const getBlog = () => {
    // todo get the current blogs
  };

  // edit blogs
  const editBlog = () => {
    // todo edit the blogs
  };

  return (
    <BlogContext.Provider
      value={{
        blogs: state.blogs,
        newBlog: state.newBlog,
        userSpecific: state.userSpecific,
        postBlog,
        getBlog,
        editBlog
      }}
    >
      {props.children}
    </BlogContext.Provider>
  );
};
