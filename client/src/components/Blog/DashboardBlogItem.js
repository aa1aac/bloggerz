import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";

import BlogContext from "../../context/blog/BlogContext";

const DashboardBlogItem = props => {
  const blogContext = useContext(BlogContext);

  const onDelete = () => {
    blogContext.deleteBlog(props.id);
  };

  return (
    <div>
      <div className="col s12 l6 m12">
        <div className="card  darken-1">
          <div className="card-content">
            <Link to={`blog/${props.id}`}>
              <span className="card-title h4">{props.title}</span>
            </Link>
            <hr />
            <p className="truncate">{props.lead}</p>
            <br />
            <button
              onClick={onDelete}
              className="btn waves-effect waves-light"
              type="submit"
              name="action"
            >
              <i className="material-icons">delete_forever</i>
            </button>{" "}
            <Link
              className="btn waves-effect waves-light"
              type="submit"
              name="action"
              to={`dashboard/edit-blog/${props.id}`}
            >
              <i className="material-icons">edit</i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardBlogItem;
