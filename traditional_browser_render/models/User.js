const mongoose = require('mongoose');
const { Schema } = mongoose;

// create schema
const userSchema = new Schema({
  googleId: String,
  credits: { type: Number, default: 0 }
});

// create model class for user => a collection in mongoDB
mongoose.model('users', userSchema);