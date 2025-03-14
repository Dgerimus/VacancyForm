import React from "react";
import ReactDOM from "react-dom/client";
import WebFont from "webfontloader";
import "./assets/index.css";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

WebFont.load({
  google: {
    families: ["Open Sans:400", "Inter:400,700"],
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
