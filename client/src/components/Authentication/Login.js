import React, { useState, useContext } from "react";

import UserContext from "../../context/user/UserContext";

const Login = () => {
  const userContext = useContext(UserContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async e => {
    e.preventDefault();

    userContext.login(email, password);

    try {
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <h4 className="green-text text-accent-4">Login </h4>

      <div className="row" >
        <form className="col s12" onSubmit={onSubmit}>
          <div className="row">
            <div className="input-field col s12">
              <input
                id="email"
                type="email"
                className="validate"
                required
                onChange={e => setEmail(e.target.value)}
                value={email}
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
                required
                onChange={e => setPassword(e.target.value)}
                value={password}
              />
              <label htmlFor="password">Password</label>
            </div>
          </div>

          <button
            className="btn waves-effect waves-light"
            type="submit"
            name="action"
      
          >
            login
            <i className="material-icons right">send</i>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
