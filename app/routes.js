import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import Body from './containers/Body';
import NotFound from './components/NotFound';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Body} />
    <Route path="*" component={NotFound} />
  </Route>
);
