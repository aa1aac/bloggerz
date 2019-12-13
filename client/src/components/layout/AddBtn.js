import React from "react";

import { Link } from "react-router-dom";

const AddBtn = () => {
  return (
    <div>
      <div className="fixed-action-btn">
        <Link
          className="btn-floating btn-large green accent-3 modal-trigger"
          to="dashboard/newPost"
        >
          <i className="large material-icons">mode_edit</i>
        </Link>
      </div>
    </div>
  );
};

export default AddBtn;
