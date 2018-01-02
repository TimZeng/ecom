import 'babel-polyfill';
import express from 'express';
import { matchRoutes } from 'react-router-config';
import proxy from 'express-http-proxy';
import Routes from './client/Routes';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';

const app = express();

// setup proxy
// send any request for /api to api server
app.use('/api', proxy('http://react-ssr-api.herokuapp.com', {
  // for handling google oauth flow
  proxyReqOptDecorator(opts) {
    opts.headers['x-forwarded-host'] = 'localhost:3000';
    return opts;
  }
}));

// serving the public folder for any file request
app.use(express.static('public'));

app.get('*', (req, res) => {
  const store = createStore( req );

  // Load data into the store before render application
  // use matchRoutes to find out what component to show
  // and more importantly what data to fetch
  const promises = matchRoutes( Routes, req.path ).map(({ route }) => {
    return route.loadData ? route.loadData( store ) : null;
  });

  // wait for all data requests to finish then render
  Promise.all( promises ).then(() => {
    res.send( renderer( req, store ) );
  });

});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});