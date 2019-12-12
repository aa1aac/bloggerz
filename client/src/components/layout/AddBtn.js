import React from "react";

const AddBtn = () => {
  return (
    <div>
      <div className="fixed-action-btn">
        <a
          className="btn-floating btn-large green accent-3 modal-trigger"
          data-target="add-blog"
        >
          <i className="large material-icons">mode_edit</i>
        </a>
      </div>
    </div>
  );
};

export default AddBtn;
