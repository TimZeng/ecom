import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import axios from 'axios';
import Routes from './Routes';
import reducers from './reducers';

// create a custom axios instance, so we get different behaviors
// from the same action creators in browser and client
const axiosInstance = axios.create({
  baseURL: '/api'
});

// the second argument of createStore is the initial state of redux store
// the window.INITIAL_STATE is defined by the server side rendered html template
const store = createStore(
  reducers,
  window.INITIAL_STATE,
  applyMiddleware( thunk.withExtraArgument( axiosInstance ) )
);

// use hydrate instead of render
// because we want to inject funcitonality (javascript code)
// into the same div as server rendered markup
ReactDOM.hydrate(
  <Provider store={ store }>
    {/*BrowserRouter is specifically for client routing*/}
    <BrowserRouter>
      {/*<Routes />*/}
      <div>{ renderRoutes( Routes ) }</div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
