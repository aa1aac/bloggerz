import React, { useState } from "react";

const AddBlogModal = () => {
  return (
    <div id="add-blog" className="modal">
      <div className="modal-content">
        <h4 className="green-text text-accent-3">Add a new Blog</h4>
        <br />
        <div className="row">
          <form className="col s12">
            <div className="row">
              <div className="input-field col s12">
                <input id="title" type="text" className="validate" required />
                <label htmlFor="title">Title</label>
              </div>
            </div>
          </form>
        </div>

        <div className="row">
          <form className="col s12">
            <div className="row">
              <div className="input-field col s12">
                <i className="material-icons prefix">mode_edit</i>
                <textarea
                  id="lead"
                  className="materialize-textarea"
                  required
                ></textarea>
                <label htmlFor="lead">Lead</label>
              </div>
            </div>
          </form>
        </div>

        <div className="row">
          <form className="col s12">
            <div className="row">
              <div className="input-field col s12">
                <i className="material-icons prefix">mode_edit</i>
                <textarea
                  id="content"
                  className="materialize-textarea"
                  required
                ></textarea>
                <label htmlFor="content">content</label>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="modal-footer">
        <button className="modal-close waves-effect waves-green btn-flat">
          <i className="material-icons">send</i>
        </button>
      </div>
    </div>
  );
};

export default AddBlogModal;
