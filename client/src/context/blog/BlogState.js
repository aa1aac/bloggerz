import React, { useReducer } from "react";
import axios from "axios";
import M from "materialize-css/dist/js/materialize.min.js";

import BlogReducer from "./BlogReducer";
import BlogContext from "./BlogContext";

import { GET_BLOGS, GET_USER_SPECIFIFC_BLOG } from "../types";

export const BlogState = props => {
  // set an intital state
  const initialState = {
    blogs: [],
    newBlog: [],
    userSpecific: [],
    editBlog: ""
  };

  //  use reducer for accessing state and dispatch function

  const [state, dispatch] = useReducer(BlogReducer, initialState);

  const postBlog = async (title, lead, content) => {
    // todo post the blog

    const res = await axios.post("/blog", {
      title,
      lead,
      content: content.split("\n")
    });
    M.toast({ html: res.data.msg });
  };

  // get blog functionality
  const getBlog = async () => {
    // get the current blogs
    const res = await axios.get("/blog");
    dispatch({ type: GET_BLOGS, payload: res.data.blogs });
  };

  // get user specific blogs
  const getSpecific = async () => {
    // todo get user specific blog
    const res = await axios.get("/blog/specific");

    dispatch({ type: GET_USER_SPECIFIFC_BLOG, payload: res.data.blogs });
  };

  // edit blogs
  const editBlog = async (title, lead, content,id) => {
    // todo edit the blogs
    console.log("editBlog");
    const res = await axios.put(`/blog/${id}`, {
      title,
      lead,
      content: content.split("\n")
    });
    console.log(res);
    M.toast({ html: res.data.msg });
  };

  const deleteBlog = async id => {
    // todo delete blog
    const res = await axios.delete(`/blog/${id}`);
    console.log(res);
  };
  return (
    <BlogContext.Provider
      value={{
        blogs: state.blogs,
        newBlog: state.newBlog,
        userSpecific: state.userSpecific,
        postBlog,
        getBlog,
        editBlog,
        getSpecific,
        deleteBlog
      }}
    >
      {props.children}
    </BlogContext.Provider>
  );
};

export default BlogState;
