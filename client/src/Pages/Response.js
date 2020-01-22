import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import M from "materialize-css/dist/js/materialize.min.js";

import UserContext from "../context/user/UserContext";

// todo display and submit responses
const URI = "https://bloggerzz.herokuapp.com";
const Response = props => {
  
  const userContext = useContext(UserContext);

  const [comment, setComment] = useState("");
  const [responses, setResponses] = useState(null);

  useEffect(() => {
    fetchResponses();
  }, []);
  const onFormSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${URI}/api/response/${props.match.params.id}`,
        {
          response: comment
        }
      );
     
      if (res.data.msg === "comment successfully added") {
        setComment("");
        fetchResponses();
      }
    } catch (error) {
      M.toast({ html: "some error occured posting comment" });
    }

    // todo handle after submit
  };

  const fetchResponses = async () => {
    // fetch responses
    const res = await axios.get(`${URI}/api/response/${props.match.params.id}`);

    setResponses(res.data);
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
      {responses ? (
        <div className="responses">
          <ul className="collection">
            {responses.map((value, index, array) => {
              
              return (
                <li className="collection-item avatar" key={index}>
                  <i className="material-icons circle red">play_arrow</i>
                  <span className="title">{value.responder}</span>
                  <p>{value.response}</p>
                  <a href="#!" className="secondary-content">
                    <i className="material-icons">grade</i>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        <div> No responses found </div>
      )}
    </div>
  );
};

export default Response;
