const mongoose = require('mongoose');
const { Schema } = mongoose;

// create schema
const userSchema = new Schema({
  googleId: String
});

// create model class for user => a collection in mongoDB
mongoose.model('users', userSchema);