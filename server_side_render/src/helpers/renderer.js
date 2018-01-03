import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
// serialize is to handle cross-site-script attack
import serialize from 'serialize-javascript';
import Routes from '../client/Routes';

export default (req, store, context) => {
  // use renderToString to create HTML and pass to client
  const content = renderToString(
    <Provider store={ store }>
      <StaticRouter
        // location is used to tell react router
        // which route the client is trying to access
        // BrowserRouter can directly read the url in the browser
        // BUT StaticRouter cannot, so we have to pass in location
        location={ req.path }
        context={ context }
      >
        <div>{ renderRoutes( Routes ) }</div>
      </StaticRouter>
    </Provider>
  );

  return `
    <html>
      <head></head>
      <body>
        <div id='root'>${content}</div>
        <script>
          window.INITIAL_STATE = ${ serialize( store.getState() ) }
        </script>
        <script src='bundle.js'></script>
      </body>
    </html>
  `;
};
