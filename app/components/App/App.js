import React, { PropTypes } from 'react';

export const App = ({ children }) => (
  <div className="App">
    <div className="content">
      <header>React Redux Boilerplate</header>
      {children}
      <footer>Baked with love!</footer>
    </div>
  </div>
);

App.propTypes = {
  children: PropTypes.element,
};

export default App;
