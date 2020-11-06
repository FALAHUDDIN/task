import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Cookies from "js-cookie";
import { revShowToken } from "../actions";

import Login from "./pages/auth/login/login";
import Home from "./pages/home/home";

const token = Cookies.getJSON("token");
export default function RouteControl() {
  const revShowToken = useSelector((state) => state.data);
  // const dispatch = useDispatch();
  // const onReqShowToken = () => {
  //   return dispatch(reqShowToken());
  // };

  // const [userIntend, setUserIntend] = useState("");

  useEffect(() => {
    setUserIntend(window.location.pathname);
  });

  // function
  const isLogin = () => {
    if (token) {
      return true;
      setUserIntend("/home");
    } else {
      setUserIntend("/login");
      return false;
    }
  };

  return (
    <div>
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
    </div>
  );
}
