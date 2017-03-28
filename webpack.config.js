const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: __dirname,
  entry: [
    'react-hot-loader/patch', 'webpack-dev-server/client?http://localhost:4000', 'webpack/hot/only-dev-server', 'babel-polyfill', './src/index.js'
  ],
  devtool: 'source-map',
  output: {
    path: path.join(__dirname, '/build'),
    filename: 'bundle.js',
    publicPath: '/build/',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: true,
  },
  module: {
    rules: [
      {
        include: path.resolve(__dirname, 'src'),
        test: /\.js$/,
        loader: 'babel-loader',
      }, {
        include: path.resolve(__dirname, 'src'),
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[local]--[hash:base64:5]',
            },
          },
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    host: 'localhost',
    hot: true,
    proxy: {
      '*': 'http://localhost:3000',
    },
    port: 4000,
  },
};
