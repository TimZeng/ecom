import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';
import reducers from '../client/reducers';

export default (req) => {
  // create a custom axios instance, so we get different behaviors
  // from the same action creators in browser and client
  // different from client side, we want to include the cookie value in all request
  const axiosInstance = axios.create({
    baseURL: 'http://react-ssr-api.herokuapp.com',
    headers: { cookie: req.get('cookie') || '' }
  });

  const store = createStore(
    reducers,
    {},
    applyMiddleware( thunk.withExtraArgument( axiosInstance ) )
  );

  return store;
};

