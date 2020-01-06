import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";

import NavBar from "./components/layout/NavBar";

import UserState from "./context/user/UserState";
import BlogState from "./context/blog/BlogState";

import Dashboard from "./Pages/Dashboard";
import EditBlog from "./Pages/EditBlog";
import AddBlog from "./Pages/AddBlog";
import Index from "./Pages/Index";
import Login from "./components/Authentication/Login";
import Signup from "./components/Authentication/Signup";
import DisplayBlog from "./Pages/DisplayBlog";
import PrivateRoute from "./components/Routing/Private";
import NonPrivateRoute from "./components/Routing/NonPrivate";

function App() {
  useEffect(() => {
    M.AutoInit();
  }, []);

  return (
    <UserState>
      <BlogState>
        <Router>
          <NavBar />
          <Switch>
            {/* routing path */}
            <Route path="/" exact component={Index} />

            <NonPrivateRoute path="/login" component={Login} exact />

            <Route path="/signup" exact component={Signup} />

            <PrivateRoute path="/dashboard" exact component={Dashboard} />

            <PrivateRoute path="/dashboard/newPost" exact component={AddBlog} />

            {/* <PrivateRoute path="/dashboard/editPost/:id" component={EditBlog} /> */}

            <Route path="/blog/:id" component={DisplayBlog} />

            <Route path="/dashboard/edit-blog/:id" component={EditBlog} />
          </Switch>
        </Router>
      </BlogState>
    </UserState>
  );
}

export default App;
