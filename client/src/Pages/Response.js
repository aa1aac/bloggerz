import React, { useContext, useState } from "react";

import UserContext from "../context/user/UserContext";

const Response = () => {
  const userContext = useContext(UserContext);

  const [comment, setComment] = useState("");

  const onSubmit = () => {};

  //   display the comment section
  const DisplayComment = () => {
    if (userContext.user) {
      return (
        <div className="row">
          <form className="col s12" onSubmit={onSubmit}>
            <div className="row">
              <div className="input-field col s12">
                <i className="material-icons prefix">mode_edit</i>
                <input
                  type="text"
                  id="response"
                  className="materialize-textarea"
                  onChange={e => setComment(e.target.value)}
                  value={comment}
                />
                <label for="response">Response</label>
              </div>
              <button
                type="submit"
                className="button-big button-indent waves-effect waves-light btn"
              >
                {" "}
                <i className="material-icons">add_comment</i>{" "}
              </button>
            </div>
          </form>
        </div>
      );
    } else {
      return <div />;
    }
  };
  return (
    <div className="container">
      <h4 className="center-align">Displaying response</h4>
      <br />
      <h5> Post a response</h5>
      <DisplayComment />

      <div className="responses">
        <ul className="collection">
          <li className="collection-item avatar">
            <img src="images/yuna.jpg" alt="" className="circle" />
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
