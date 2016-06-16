import React, {Component} from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import Index from './containers/index';
import NotFound from './components/not-found';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Index}/>
    <Route path="*" component={NotFound}/>
  </Route>
);
