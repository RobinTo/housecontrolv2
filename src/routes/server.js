import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../screens/Home';
import Info from '../screens/Info';
import About from '../screens/About';

export default () => (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route path='/info' component={Info} />
    <Route path='/about' component={About} />
  </Switch>
);
