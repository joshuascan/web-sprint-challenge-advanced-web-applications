import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Login from "./components/Login";
import BubblePage from "./components/BubblePage";
import PrivateRoute from "./components/PrivateRoute";
import axiosWithAuth from "./helpers/axiosWithAuth";
import "./styles.scss";

function App() {
  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <Router>
      <div className="App">
        <header>
          Color Picker Sprint Challenge
          <Link data-testid="logoutButton" onClick={logout}>
            logout
          </Link>
        </header>
        <Switch>
          <Route exact path="/" component={Login} />
          <PrivateRoute exact path="/bubbles">
            <BubblePage />
          </PrivateRoute>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

//Task List:
//1. Render BubblePage as a PrivateRoute
//2. Build the logout button to remove the localStorage Item.
