const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');

// connect to mongoDB through mongoose
mongoose.connect(keys.mongoURI);

// initialize a server app
const app = express();

/***********************************************************************
 * Oauth set up with passport and cookie-session
 ***********************************************************************/

// cookie configuration
app.use(cookieSession({
  maxAge: 30 * 24 * 60 * 60 * 1000, // time that cookie can exist before expired
  keys: [keys.cookieKey] // keys used to encrypt user indentification
}));

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);

/***********************************************************************
 * Start server
 ***********************************************************************/

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
