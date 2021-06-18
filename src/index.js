import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { INDEX } from "./routes/main.routes";
import "./assets/main.css";
import IndexPage from "./pages/IndexPage/IndexPage";
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path={INDEX} component={IndexPage} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
