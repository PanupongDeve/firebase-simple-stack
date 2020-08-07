import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Page1 } from './pages/Page1';
import { Page2 } from './pages/Page2';

import { Route, Switch, HashRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router basename="">
      <Switch>
        <Route exact path="/" component={Page1} />
        <Route exact path="/page2" component={Page2} />
      </Switch>
    </Router>
  );
}

export default App;
