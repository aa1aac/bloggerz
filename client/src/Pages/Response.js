import React, { useContext, useState } from "react";
import axios from "axios";

import UserContext from "../context/user/UserContext";

// todo display and submit responses

const Response = props => {
  const userContext = useContext(UserContext);

  const [comment, setComment] = useState("");

  const onFormSubmit = async e => {
    e.preventDefault();
    console.log(props.match.params.id);
    const res = await axios.post(`/response/${props.match.params.id}`);
    console.log(res.data);
  };

  return (
    <div className="container">
      <h4 className="center-align">Displaying response</h4>
      <br />

      {/* <CommentBox /> */}
      {userContext.user ? (
        <div>
          <h5>Post a response</h5>
          <div className="row">
            <div className="row">
              <form className="col s12" onSubmit={onFormSubmit}>
                <div className="input-field col s12">
                  <input
                    id="comment"
                    type="text"
                    className="validate"
                    required
                    value={comment}
                    onChange={e => {
                     
                      return setComment(e.target.value);
                    }}
                  />
                  <label htmlFor="comment">Comment</label>
                </div>
                <button
                  className="btn waves-effect waves-light"
                  type="submit"
                  name="action"
                >
                  Comment
                  <i className="material-icons right">send</i>
                </button>
              </form>
            </div>
          </div>
        </div>
      ) : (
        <div />
      )}

      <div className="responses">
        <ul className="collection">
          <li className="collection-item avatar">
            <i className="material-icons circle">folder</i>
            <span className="title">Title</span>
            <p>
              First Line <br />
              Second Line
            </p>
            <a href="#!" className="secondary-content">
              <i className="material-icons">grade</i>
            </a>
          </li>
          <li className="collection-item avatar">
            <i className="material-icons circle green">insert_chart</i>
            <span className="title">Title</span>
            <p>
              First Line <br />
              Second Line
            </p>
            <a href="#!" className="secondary-content">
              <i className="material-icons">grade</i>
            </a>
          </li>
          <li className="collection-item avatar">
            <i className="material-icons circle red">play_arrow</i>
            <span className="title">Title</span>
            <p>
              First Line <br />
              Second Line
            </p>
            <a href="#!" className="secondary-content">
              <i className="material-icons">grade</i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Response;
