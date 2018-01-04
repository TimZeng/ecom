const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const webpackNodeExternals = require('webpack-node-externals');

// this is the webpack configuration for SERVER only
const config = {
  // Inform webpack that we'r building a bundle for nodeJS, rather than for the browser
  target: 'node',

  // Tell webpack the root file of our server application
  entry: './src/index.js',

  // Tell webpack where to put the output file that is generated
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },

  // exclude node_module modules from server bundle
  // to reduce server side bundle size
  // and we can import node modules at run-time
  externals: [webpackNodeExternals()]
};

// merge server specific config with base config
module.exports = merge(baseConfig, config);