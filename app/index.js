import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import routes from './routes';
import rootReducer from './reducers';

const createStoreWithMiddleware = createStore(
  rootReducer,
  window.devToolsExtension ? window.devToolsExtension() : f => f,
  applyMiddleware(thunk)
);

(() => {
  if ('serviceWorker' in navigator) {
    // caching
    navigator.serviceWorker.register('/marvelHeroes.service-worker.js');
  }
})();

ReactDOM.render(
  <Provider store={createStoreWithMiddleware}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.querySelector('.container')
);
