const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

// get the users model from mongoose
const User = mongoose.model('users');

// set up google Oauth with passport
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback'
    },
    ( accessToken, refreshToken, profile, done ) => {
      new User({ googleId: profile.id }).save();
    }
  )
);
