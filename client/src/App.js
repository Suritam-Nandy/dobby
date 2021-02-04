import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import logo from './logo.svg';
import SignUp from './pages/signup'
import SignIn from './pages/signin'

import './App.css';

function App() {
  return (
    <>
      <Router>
      <Switch>
          <Route path="/" exact component={SignUp} />
          <Route path="/signin" exact component={SignIn} />
      </Switch>
      </Router>
    </>
  );
}

export default App;
