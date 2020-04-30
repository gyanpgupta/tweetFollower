import React, { Component } from "react";
import "./App.css";
import { Router, Route, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";

//import { createBrowserHistory } from 'history'

import Tweet from "../web/Tweet/component";

const history = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div>
          <Route exact path="/" render={() => <Redirect to="/Tweet" />} />
          <Route path={"/Tweet"} component={Tweet} />
        </div>
      </Router>
    );
  }
}

export default App;
