const _ = require('lodash');
const Path = require('path-parser');
const { URL } = require('url');
const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');
const Mailer = require('../services/Mailer');
const surveyTemplate = require('../services/emailTemplates/surveyTemplate');

const Survey = mongoose.model('surveys');

module.exports = app => {
  app.get('/api/surveys', requireLogin, async (req, res) => {
    // we only need the survey and stats
    // no need to fetch the recipient list
    const surveys = await Survey.find({ _user: req.user.id })
      // to exclude the recipients field
      .select({ recipients: false }); // can also be .select('-recipients')

    res.send(surveys);
  });

  app.get('/api/surveys/:surveyId/:choice', (req, res) => {
    res.send('Thanks for voting!');
  });

  // route for handling webhook data from sendgrid
  app.post('/api/surveys/webhooks', (req, res) => {
    // create path object, this is kind of a regrex for url
    const p = new Path('/api/surveys/:surveyId/:choice');

    // .chain is used to chain lodash helpers
    _.chain(req.body)
      // extract information from webhook data
      .map(({ url, email }) => {
        // extract pathname from webhook data
        const pathname = new URL(url).pathname;

        // extract surveyId and choice from pathname
        // and check if pathname has BOTH surveyId and choice
        const match = p.test(pathname);
        if ( match ) return { email, surveyId: match.surveyId, choice: match.choice };
      })

      // remove elements that is undefined
      .compact()

      // remove duplicate records
      .uniqBy('email', 'surveyId')

      // update mongoDB based on click events
      .each(({ surveyId, email, choice }) => {
        // use updateOne from the mongoose model to find AND update one record
        Survey.updateOne({
          _id: surveyId,
          recipients: {
            // matching subdocument collection
            $elemMatch: { email, responded: false }
          }
        }, {
          // increment
          $inc: { [choice]: 1 },
          // set value
          $set: { 'recipients.$.responded': true },
          // directly setting field value
          lastResponded: new Date()
        })
        // execute the query
        .exec();
      })
      .value();

    // send response back to sendgrid, so sendgrid knows
    res.send({});
  });

  app.post('/api/surveys', requireLogin, requireCredits, async ( req, res ) => {
    const { title, subject, body, recipients } = req.body;

    // create survey instance
    const survey = new Survey({
      title,
      subject,
      body,
      // setup subdocument collection
      recipients: recipients.split(',').map(email => ({ email: email.trim() })),
      // setup relationship between user model
      _user: req.user.id,
      dateSent: Date.now()
    });

    // send emails
    const mailer = new Mailer(survey, surveyTemplate(survey));

    // error handling for async/await syntax
    try {
      await mailer.send();
      await survey.save();
      req.user.credits -= 1;
      const user = await req.user.save();

      res.send(user);
    } catch (err) {
      res.status(422).send(err);
    }
  });
};