import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home';

// use hydrate instead of render
// because we want to inject funcitonality (javascript code)
// into the same div as server rendered markup
ReactDOM.hydrate(
  <Home />,
  document.getElementById('root')
);
