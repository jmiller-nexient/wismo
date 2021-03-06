/* eslint-env node */
const path = require('path');
const webpack = require('webpack');

const config = require('./webpack.config.js');

config.devServer = {
  contentBase: path.join(__dirname, 'public/'),
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
  hot: true,
  publicPath: 'http://localhost:3000/build',
  port: 3000,
  historyApiFallback: true,
};
config.mode = 'development';
config.plugins.push(new webpack.NamedModulesPlugin());
config.plugins.push(new webpack.HotModuleReplacementPlugin());

module.exports = config;
