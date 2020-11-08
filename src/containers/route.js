import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Cookies from "js-cookie";
import Login from "./pages/auth/login/login";
import Home from "./pages/home/home";

const token = Cookies.getJSON("token");
export default function RouteControl() {
  // function
  const isLogin = () => {
    if (token) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/home" />} />
        <Route
          exact
          path="/login"
          render={() => (isLogin() ? <Redirect to="/home" /> : <Login />)}
        />
        <Route
          exact
          path="/home"
          render={() => (isLogin() ? <Home /> : <Redirect to="/login" />)}
        />
        <Route path="/login" render={() => <Login />} />
        <Route path="/home" render={() => <Home />} />
      </Switch>
    </BrowserRouter>
  );
}
