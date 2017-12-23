const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

// get the users model from mongoose
const User = mongoose.model('users');

// set up serialization of user
passport.serializeUser((user, done) => {
  console.log('<<<<<<<<<<<<<<<<<<<<<<<serializing<<<<<<<<<<<<<<<<<<<<<<<<');
  done( null, user.id )
});

// set up deserialization of user
passport.deserializeUser((id, done) => {
  console.log('>>>>>>>>>>>>>>>>>>>>>>>deserializing>>>>>>>>>>>>>>>>>>>>>>>>');
  User.findById(id)
    .then(user => {
      done(null, user);
    });
});

// set up google Oauth with passport
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
      proxy: true // trust proxy for google authentication
    },
    // ( accessToken, refreshToken, profile, done ) => {
    //   User.findOne({ googleId: profile.id })
    //     .then(existingUser => {
    //       if ( existingUser ) {
    //         // already have a record with the given prifile ID
    //         done( null, existingUser );
    //       } else {
    //         // we don't have a user record with the prifile ID
    //         new User({ googleId: profile.id })
    //           .save()
    //           .then(newUser => done( null, newUser ));
    //       }
    //     });
    // }

    // refactor for async/await syntax
    async ( accessToken, refreshToken, profile, done ) => {
      const existingUser = await User.findOne({ googleId: profile.id });

      if ( existingUser ) {
        return done( null, existingUser );
      }

      const newUser = await new User({ googleId: profile.id }).save();
      done( null, newUser );
    }
  )
);
