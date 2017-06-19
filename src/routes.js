import React from 'react';
import {
  Route,
  BrowserRouter as Router,
  Redirect
} from 'react-router-dom';

import Main from './containers/Main';
import LoginForm from './containers/LoginForm';


function isLoggedIn() {
    if (localStorage.token) return true;
    else return false;
}

export default (
  <Router>
    <div>
      <Route exact path="/" render={() => (
        isLoggedIn() ?
        (<Main />) :
        (<Redirect to="/login"/>)
      )}/>
      <Route path="/login" component={LoginForm} />
    </div>
  </Router>
);
