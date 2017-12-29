// keys.js - figure out what set of credentials to return
if ( process.env.NODE_ENV === 'production' ) {
  // we are in the production
  module.exports = require('./prod');
} else {
  // we are in the dev
  module.exports = require('./dev');
}