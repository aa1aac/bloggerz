import React, { useReducer } from "react";
import axios from "axios";
import M from 'materialize-css/dist/js/materialize.min.js'

import BlogReducer from "./BlogReducer";
import BlogContext from "./BlogContext";

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
    const res = await axios.post("/blog", { title, lead, content });
      M.toast({html:res.data.msg})
    
  };

  // get blog functionality
  const getBlog =async () => {
    // todo get the current blogs
    const res = axios.get('/blog')
    console.log(res.data)
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

export default BlogState;
