// var path = require('path');
// var SRC_DIR = path.join(__dirname, '/src');
// var DIST_DIR = path.join(__dirname, '/react-client/dist');

module.exports = {
  entry: `./src/index.jsx`,
  output: {
    filename: './static/js/bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['react']
        }
      }
    ]
  }
};
