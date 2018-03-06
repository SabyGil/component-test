import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import Nav from './Nav';

const Routes = () => (
  <Router>
    <Nav />
    <Switch>
      <Route exact path ='/' component={App} />
    </Switch>
  </Router>
);

export default Routes;
