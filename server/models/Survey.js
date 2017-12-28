const mongoose = require('mongoose');
const { Schema } = mongoose;
const RecipientSchema = require('./Recipient')

// create schema
const surveySchema = new Schema({
  title: String,
  body: String,
  subject: String,

  // define subdocument collection
  recipients: [ RecipientSchema ],

  // setup relationship with user schema
  _user: { type: Schema.Types.ObjectId, ref: 'User' },

  // track responses
  yes: { type: Number, default: 0 },
  no: { type: Number, default: 0 },

  // track timing of sending and responding
  dateSent: Date,
  lastResponded: Date
});

// create model class for surveys => a collection in mongoDB
mongoose.model('surveys', surveySchema);