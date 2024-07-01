import React from "react";
import ReactDOM from "react-dom/client";
import { AppRoot } from "@dynatrace/strato-components";
import { BrowserRouter } from "react-router-dom";
// import { App } from "./app/App";
import App from "./Dag/App";
import { Helmet } from "react-helmet";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <AppRoot>
    <Helmet>
      <meta
        httpEquiv="Content-Security-Policy"
        content="default-src * self blob: data: gap:; style-src * self 'unsafe-inline' blob: data: gap:; script-src * 'self' 'unsafe-eval' 'unsafe-inline' blob: data: gap:; object-src * 'self' blob: data: gap:; img-src * self 'unsafe-inline' blob: data: gap:; connect-src self * 'unsafe-inline' blob: data: gap:; frame-src * self blob: data: gap:;"
      />
    </Helmet>
    <BrowserRouter basename="ui">
      <App />
    </BrowserRouter>
  </AppRoot>
);
