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
      },
      div: {
        boxSizing: "border-box",
      },
    },
    container: {
      height: "100vh",
      backgroundColor: "red",
      boxSizing: "border-box",
    },
  });

  const app = useStyles();

  return (
    <div className={app.container}>
      <Provider store={store}>
        <HttpsRedirect>
          <RouteControl />
        </HttpsRedirect>
      </Provider>
    </div>
  );
}
