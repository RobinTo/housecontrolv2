import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AsyncRoute from '../components/AsyncRoute';

if (global) {
  global.System = { import() {} };
}

export default () => (
  <Switch>
    <Route exact path='/' component={props => <AsyncRoute props={props} loadingPromise={System.import('../screens/Home')} />} />
    <Route path='/info' component={props => <AsyncRoute props={props} loadingPromise={System.import('../screens/Info')} />} />
    <Route path='/about' component={props => <AsyncRoute props={props} loadingPromise={System.import('../screens/About')} />} />
  </Switch>
);
