import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import App from './components/App';
// import App from './components/ScreenOneTempThree';

const Routes = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path ='/' component={App} />
      </Switch>
    </div>
  </Router>
);

export default Routes;
