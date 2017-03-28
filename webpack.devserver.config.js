const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractSass = new ExtractTextPlugin({
  filename: "[name]-devserver.css",
  allChunks: true
});

module.exports = {
  context: __dirname,
  entry: [
    'babel-polyfill', './src/server/server.js'
  ],
  devtool: 'source-map',
  target: 'node',
  output: {
    path: path.join(__dirname, '/build'),
    filename: 'devserverbundle.js',
    publicPath: '/build/',
    libraryTarget: 'commonjs2'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: true
  },
  module: {
    rules: [
      {
        exclude: path.resolve(__dirname, 'node_modules'),
        test: /\.js$/,
        loader: 'babel-loader'
      }, {
        exclude: path.resolve(__dirname, 'node_modules'),
        test: /\.scss$/,
        use: extractSass.extract({
          use: [
            {
              loader: "css-loader",
              options: {
                modules: true,
                localIdentName: '[local]--[hash:base64:5]'
              }
            }, {
              loader: "sass-loader"
            }
          ]
        })
      }
    ]
  },
  plugins: [
    extractSass
  ]
};
