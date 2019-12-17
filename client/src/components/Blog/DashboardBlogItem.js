import React from "react";
import { Link } from "react-router-dom";

const DashboardBlogItem = props => {
  return (
    <Link to={`blog/${props.id}`} key={props.id}>
      <div className="col s12 l6 m12">
        <div className="card  darken-1">
          <div className="card-content">
            <span className="card-title h4">{props.title}</span>
            <hr />
            <p className="truncate">{props.lead}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default DashboardBlogItem;
