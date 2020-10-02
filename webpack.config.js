const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// App directory
const appDirectory = fs.realpathSync(process.cwd());

// Gets absolute path of file within app directory
const resolveAppPath = relativePath => path.resolve(appDirectory, relativePath);

// Host
const host = process.env.HOST || 'localhost';

// Required for babel-preset-react-app
process.env.NODE_ENV = 'development';

module.exports = {
    // Environment mode
    mode: 'development',

    // Entry point of app
    entry: resolveAppPath('client/index.jsx'),

    output: {

      // Development filename output
      filename: 'static/js/bundle.js',
    },

    devServer: {

      // Serve index.html as the base
      contentBase: resolveAppPath('public'),

      // Enable compression
      compress: true,

      // Enable hot reloading
      hot: true,
      host,
      port: 3101,
      // Public path is root of content base
      publicPath: '/',

    },

    plugins: [
      // Re-generate index.html with injected script tag.
      // The injected script tag contains a src value of the
      // filename output defined above.
      new HtmlWebpackPlugin({
        inject: true,
        template: resolveAppPath('public/index.html'),
      }),
    ],

    module: {
      rules: [
        {
          test: /\.jsx?/,
          exclude: /node_modules/,
          include: resolveAppPath('client'),
          loader: 'babel-loader',
          options: {
            presets: [
              require.resolve('babel-preset-react-app'),
            ]
          }
        }
      ]
    }
}