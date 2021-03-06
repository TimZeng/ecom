const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/User');
require('./models/Survey');
require('./services/passport');

// connect to mongoDB through mongoose
mongoose.connect(keys.mongoURI);

// initialize a server app
const app = express();
app.use(bodyParser.json());

/***********************************************************************
 * Oauth set up with passport and cookie-session
 ***********************************************************************/

app.use((req, res, next) => {
  console.log(`Serving ${req.method} request on ${req.url}, ${req.get('cookie') || 'no cookie'}`);
  next();
});

// cookie configuration
app.use(cookieSession({
  maxAge: 30 * 24 * 60 * 60 * 1000, // time that cookie can exist before expired
  keys: [keys.cookieKey] // keys used to encrypt user indentification
}));

app.use(passport.initialize());
app.use(passport.session());

/***********************************************************************
 * Attach routes to express server
 ***********************************************************************/

require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);
require('./routes/surveyRoutes')(app);

if ( process.env.NODE_ENV === 'production' ) {
  // Express will serve up production assets
  // like out main.js file, or main.css file
  app.use(express.static('client/build'));

  // Express will serve up the index.html file
  // if it doesn't recognize the route
  const path = require('path');
  app.get('*', ( req, res ) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  })
}

/***********************************************************************
 * Start server
 ***********************************************************************/

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
