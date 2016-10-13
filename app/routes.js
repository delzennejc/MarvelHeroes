import React from 'react';
import { Route, IndexRoute } from 'react-router';

// shim for node.js
if (typeof module !== 'undefined' && module.require) {
  if (typeof require.ensure === 'undefined') {
    require.ensure = require('node-ensure'); // eslint-disable-line
  }
}

export default (
  <Route
    path="/"
    getComponent={(location, callback) => {
      require.ensure([], require => {
        callback(null, require('./containers/App').default, 'App');
      });
    }}
  >
    <IndexRoute
      getComponent={(location, callback) => {
        require.ensure([], require => {
          callback(null, require('./containers/CharactersList').default, 'CharactersList');
        });
      }}
    />
    <Route
      path="/character/:id"
      getComponent={(location, callback) => {
        require.ensure([], require => {
          callback(null, require('./containers/Character').default, 'Character');
        });
      }}
    />
    <Route
      path="*"
      getComponent={(location, callback) => {
        require.ensure([], require => {
          callback(null, require('./components/NotFound').default, 'NotFound');
        });
      }}
    />
  </Route>
);
