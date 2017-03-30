import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../screens/Home';
import Video from '../screens/Video';
import ImageSlider from '../screens/ImageSlider';
import Controls from '../screens/Controls';

export default () => (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route path='/video' component={Video} />
    <Route path='/images' component={ImageSlider} />
    <Route path='/controls' component={Controls} />
  </Switch>
);
