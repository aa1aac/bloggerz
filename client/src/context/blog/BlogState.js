import React, { useReducer, useContext } from "react";
import axios from "axios";

import M from "materialize-css/dist/js/materialize.min.js";

import BlogReducer from "./BlogReducer";
import BlogContext from "./BlogContext";

import { GET_BLOGS, GET_USER_SPECIFIFC_BLOG } from "../types";

export const BlogState = props => {
  const URI = 'https://bloggerzz.herokuapp.com'
  // set an intital state
  const initialState = {
    blogs: [],
    newBlog: [],
    userSpecific: [],
    editBlog: "",
    hasNextPage: false,
    hasPreviousPage: false,
    currentPage: null,
    nextPage: null,
    previousPage: null
  };

  //  use reducer for accessing state and dispatch function

  const [state, dispatch] = useReducer(BlogReducer, initialState);

  const postBlog = async (title, lead, content) => {
    // todo post the blog

    const res = await axios.post(
      `${URI}/api/blog`,
      {
        title,
        lead,
        content: content.split("\n")
      }
    );
    M.toast({ html: res.data.msg });
  };

  // get blog functionality
  const getBlog = async () => {
    // get the current blogs
    const res = await axios.get(
      `${URI}/api/blog`
    );

 

    dispatch({ type: GET_BLOGS, payload: res.data });
  };

  const getPrevious = async () => {
    // get the  blogs

    const res = await axios.get(
      `${URI}/api/blog?page=${state.previousPage}`
    );

    dispatch({ type: GET_BLOGS, payload: res.data });
  };

  const getNext = async () => {
    // get the  blogs

    const res = await axios.get(
      `${URI}/api/blog?page=${state.nextPage}`
    );

    dispatch({ type: GET_BLOGS, payload: res.data });
  };

  // get user specific blogs
  const getSpecific = async () => {
    // todo get user specific blog
    const res = await axios.get(
      `${URI}/api/blog/specific`
    );

    dispatch({ type: GET_USER_SPECIFIFC_BLOG, payload: res.data.blogs });
  };

  // edit blogs
  const editBlog = async (title, lead, content, id) => {
    // todo edit the blogs
    
    const res = await axios.put(
      `${URI}/api/blog/${id}`,
      {
        title,
        lead,
        content: content.split("\n")
      }
    );
    
    M.toast({ html: res.data.msg });
  };

  const deleteBlog = async id => {
    // todo delete blog
    const res = await axios.delete(
      `${URI}/api/blog/${id}`
    );

  };
  return (
    <BlogContext.Provider
      value={{
        blogs: state.blogs,
        newBlog: state.newBlog,
        userSpecific: state.userSpecific,
        hasNextPage: state.hasNextPage,
        hasPreviousPage: state.hasPreviousPage,
        currentPage: state.currentPage,
        nextPage: state.nextPage,
        previousPage: state.previousPage,
        postBlog,
        getBlog,
        editBlog,
        getSpecific,
        deleteBlog,
        getNext,
        getPrevious
      }}
    >
      {props.children}
    </BlogContext.Provider>
  );
};

export default BlogState;
