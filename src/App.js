import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import HttpsRedirect from "react-https-redirect";
import RouteControl from "./containers/route";

export default function App() {
  return (
    <Provider store={store}>
      <HttpsRedirect>
        <RouteControl />
      </HttpsRedirect>
    </Provider>
  );
}
