import React from "react";
import ReactDOM from "react-dom/client";
import { AppRoot } from "@dynatrace/strato-components";
import { BrowserRouter } from "react-router-dom";
// import { App } from "./app/App";
import App from "./Dag/App";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <AppRoot>
    <BrowserRouter basename="ui">
      <App />
    </BrowserRouter>
  </AppRoot>
);
