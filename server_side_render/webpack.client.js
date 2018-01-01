const path = require('path');

module.exports = {
  // Tell webpack the root file of our server application
  entry: './src/client/client.js',

  // Tell webpack where to put the output file that is generated
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },

  // Tell webpack to run babel on every file it runs through
  module: {
    rules: [
      {
        // only run javascript files
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            'react',  // for react
            'stage-0', // for async operations
            ['env', { targets: { browsers: ['last 2 versions'] }}]
          ]
        }
      }
    ]
  }
};