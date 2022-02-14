import React, { useState, useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Profile from "./Users/Profile";
import Home from "./Home";
import Login from "./Auth/Login";
import Signup from "./Auth/Signup";
import Post from "./Posts/Post";
import Posts from "./Posts/Posts";
import Logout from "./Auth/Logout";
import ProtectedRoute from "./Auth/ProtectedRoute";
import MissingPage from "../MissingPage";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/profile">
        <Profile />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/signup">
        <Signup />
      </Route>
      <Route exact path="/Posts">
        <Posts />
      </Route>
      <Route exact path="/Posts/:id">
        <Post />
      </Route>
      <Route exact path="/logout">
        <Logout />
      </Route>
      <Route exact path="/missing">
        <MissingPage />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
};

export default Routes;