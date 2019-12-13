import React, { useState} from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import axios from "axios";


const Signup = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [confirm, setConfirm] = useState("");
  
  

  const onSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post("/user/signup", {
        name,
        email,
        password,
        confirm
      });
      M.toast({ html: res.data.msg });
    } catch (error) {
      M.toast({ html: "some server error occured" });
      console.log(error);
    }
  };

  return (
    <div className="row">
      <div className="container">
        <h4>Signup</h4>
        <form className="col s12" onSubmit={onSubmit}>
          <div className="row">
            <div className="input-field col s12">
              <input
                id="first_name"
                type="text"
                className="validate"
                onChange={e => setName(e.target.value)}
                required
              />
              <label htmlFor="first_name">Name</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input
                id="email"
                type="email"
                className="validate"
                onChange={e => setEmail(e.target.value)}
                required
              />
              <label htmlFor="email">Email</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input
                id="password"
                type="password"
                className="validate"
                onChange={e => setPassword(e.target.value)}
                required
              />
              <label htmlFor="password">Password</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input
                id="confirmpassword"
                type="password"
                className="validate"
                onChange={e => setConfirm(e.target.value)}
                required
              />
              <label htmlFor="confirmpassword">Confirm</label>
            </div>
          </div>
          <button
            className="btn waves-effect waves-light"
            type="submit"
            name="action"
          >
            Signup
            <i className="material-icons right">send</i>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
