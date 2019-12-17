import React, { useReducer } from "react";
import axios from "axios";
import M from "materialize-css/dist/js/materialize.min.js";

import UserReducer from "./UserReducer";
import UserContext from "./UserContext";
import { LOGIN_USER, GET_CURRENT_USER } from "../types";

const UserState = props => {
  const initialState = {
    user: ""
  };

  const [state, dispatch] = useReducer(UserReducer, initialState);

  const login = async (email, password) => {
    try {
      const res = await axios.post("/user/login", { email, password });
      console.log(res);
      dispatch({
        type: LOGIN_USER,
        payload: res.data.user.id
      });

      M.toast({ html: res.data.msg });
    } catch (error) {
      console.log(error);
      // todo msg
      M.toast({ html: "Oops! some error occured" });
    }
  };

  const getUser = async () => {
    try {
      const res = await axios.get("user");

      dispatch({
        type: GET_CURRENT_USER,
        payload: res.data.user.id
      });

      console.log(res.data);
    } catch (error) {
      console.log(error);
      // todo msg
      M.toast({ html: "Oops! some error occured" });
    }
  };

  return (
    <UserContext.Provider
      value={{
        user: state.user,
        isLoggedin: state.isLoggedin,
        login,
        getUser
        // other functions
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
