import React from "react";
import { createUseStyles } from "react-jss";
import { Provider } from "react-redux";
import store from "./store";
import HttpsRedirect from "react-https-redirect";
import RouteControl from "./containers/route";

export default function App() {
  const useStyles = createUseStyles({
    "@global": {
      body: {
        margin: 0,
        padding: 0,
        letterSpacing: "0.5px",
        boxSizing: "border-box",
      },
      div: {
        boxSizing: "border-box",
      },
      input: {
        boxSizing: "border-box",
      },
      button: {
        boxSizing: "border-box",
      },
      "input:focus": {
        outline: "unset",
        border: "2px solid #5285EC",
      },
      "input::placeholder": { color: "#7A7D7E" },
      "button:focus": {
        outline: "unset",
        border: "2px solid ##1251d0",
      },
      "button:hover": {
        backgroundColor: "#1251d0",
      },
    },
    container: {
      height: "100vh",
      width: "100vw",
      backgroundColor: "#F4F4F6",
      fontFamily: "Montserrat, medium, sans-serif",
    },
  });
  const app = useStyles();

  return (
    <div className={app.container}>
      <Provider store={store}>
        {/* <HttpsRedirect> */}
        <RouteControl />
        {/* </HttpsRedirect> */}
      </Provider>
    </div>
  );
}
