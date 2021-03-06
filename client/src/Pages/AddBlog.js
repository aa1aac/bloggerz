import React, { useState, useContext } from "react";

import BlogContext from "../context/blog/BlogContext";

const AddBlog = () => {
  const [title, setTitle] = useState("");
  const [lead, setLead] = useState("");
  const [content, setContent] = useState("");

  const blogContext = useContext(BlogContext);

  const onSend = e => {
    e.preventDefault();
    blogContext.postBlog(title, lead, content);
  };

  return (
    <div className="container">
      <h5 className="text-accent-3 green-text center-align">Add new Post</h5>
      <div className="row">
        <form className="col s12" onSubmit={onSend}>
          <div className="input-field col s12">
            <input
              id="title"
              type="text"
              className="validate"
              required
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
            <label htmlFor="title">Title</label>
          </div>

          <div className="row">
            <div className="input-field col s12">
              <i className="material-icons prefix">mode_edit</i>
              <textarea
                id="Lead"
                className="materialize-textarea"
                required
                value={lead}
                onChange={e => setLead(e.target.value)}
              ></textarea>
              <label htmlFor="Lead">Lead</label>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s12">
              <i className="material-icons prefix">mode_edit</i>
              <textarea
                id="Content"
                className="materialize-textarea"
                required
                value={content}
                onChange={e => setContent(e.target.value)}
              ></textarea>
              <label htmlFor="Content">Content</label>
            </div>
          </div>
          <button
            className="btn waves-effect waves-light green accent-4"
            type="submit"
            name="action"
          >
            <i className="material-icons right">send</i>
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBlog;
