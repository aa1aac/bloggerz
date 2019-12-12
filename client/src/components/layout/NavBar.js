import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import UserContext from "../../context/user/UserContext";

const NavBar = () => {
  const userContext = useContext(UserContext);

  useEffect(() => {
    userContext.getUser();

    console.log(userContext.user);
  },[]);

  const UserSpecific = () => {
    if (userContext.user) {
      return [
        <li key="1">
          {" "}
          {/* todo logout */}
          <a href="#!" className="black-text">
            Logout
          </a>{" "}
        </li>,
        <li key="2">
          {" "}
          <Link to="/dashboard" className="black-text">
            Dashboard
          </Link>{" "}
        </li>
      ];
    } else {
      return (
        <li>
          {" "}
          <Link to="/login" className="black-text">
            Login
          </Link>{" "}
        </li>
      );
    }
  };

  return (
    <div>
      <nav className="grey-text">
        <div className="nav-wrapper grey lighten-5 text-black">
          <a href="/" className="brand-logo green-text text-accent-3">
            <i className="material-icons">public</i> Bloggerz
          </a>
          <a
            href="#"
            data-target="mobile"
            className="sidenav-trigger green-text text-accent-3"
          >
            <i className="material-icons">menu</i>
          </a>
          <ul className="right hide-on-med-and-down  green-text text-accent-3 ">
            <UserSpecific />
          </ul>
        </div>
      </nav>

      <ul className="sidenav" id="mobile">
        <UserSpecific />
      </ul>
    </div>
  );
};

export default NavBar;