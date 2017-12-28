const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');
const Mailer = require('../services/Mailer');
const surveyTemplate = require('../services/emailTemplates/surveyTemplate');

const Survey = mongoose.model('surveys');

module.exports = app => {
  app.get('/api/surveys/thanks', (req, res) => {
    res.send('Thanks for voting!');
  })

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