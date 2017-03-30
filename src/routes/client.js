import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AsyncRoute from '../components/AsyncRoute';

if (global) {
  global.System = { import() {} };
}

export default () => (
  <Switch>
    <Route exact path='/' component={props => <AsyncRoute props={props} loadingPromise={System.import('../screens/Home')} />} />
    <Route path='/video' component={props => <AsyncRoute props={props} loadingPromise={System.import('../screens/Video')} />} />
    <Route path='/images' component={props => <AsyncRoute props={props} loadingPromise={System.import('../screens/ImageSlider')} />} />
    <Route path='/controls' component={props => <AsyncRoute props={props} loadingPromise={System.import('../screens/Controls')} />} />
  </Switch>
);
