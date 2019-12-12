import React from "react";

const EditBlogModal = () => {
  return (
    <div id="edit-blog" className="modal">
      <div className="modal-content">
        <h4 className="green-text text-accent-3">Add a new Blog</h4>
        <p>Lead</p>
      </div>
      <div className="modal-footer">
        <a href="#!" className="modal-close waves-effect waves-green btn-flat">
          Agree
        </a>
      </div>
    </div>
  );
};

export default EditBlogModal;
