import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";

import UserContext from "../../context/user/UserContext";

const NonPrivateRoute = ({ component: Component, ...rest }) => {
  const userContext = useContext(UserContext);
  const { user } = userContext;

  return (
    <Route
      {...rest}
      render={props =>
        user ? <Redirect to="/dashboard" /> : <Component {...props} />
      }
    />
  );
};

export default NonPrivateRoute;
