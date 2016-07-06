import React, {Component} from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import Container from './containers/container';
import NotFound from './components/not-found';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Container}/>
    <Route path="*" component={NotFound}/>
  </Route>
);
