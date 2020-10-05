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
