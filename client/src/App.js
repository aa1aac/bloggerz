import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";

import NavBar from "./components/layout/NavBar";
import Index from "./Pages/Index";
import Login from "./components/Authentication/Login";
import Signup from "./components/Authentication/Signup";
import UserState from "./context/user/UserState";


import Dashboard from "./Pages/Dashboard";

function App() {
  
  
  useEffect(() => {
    M.AutoInit();
  }, []);

  return (
    <UserState>
     
      <Router>
        <NavBar />
        <Switch>
          {/* routing path */}
          <Route path="/" exact>
            <Index />
          </Route>
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="/signup" exact>
            <Signup />
          </Route>
          <Route path="/dashboard" exact>
            <Dashboard />
          </Route>
        </Switch>
      </Router>
    </UserState>
  );
}

export default App;
