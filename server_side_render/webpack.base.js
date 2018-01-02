// this is the base webpack configuration for both client and the server
module.exports = {
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