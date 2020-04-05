/* eslint-env node */
const path = require('path');
const webpack = require('webpack');

const config = require('./webpack.config.js');

config.devServer = {
  contentBase: path.join(__dirname, 'public/'),
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
  hotOnly: true,
  publicPath: 'http://localhost:3000/build',
  port: 3000,
};
config.mode = 'development';
config.plugins.push(new webpack.NamedModulesPlugin());
config.plugins.push(new webpack.HotModuleReplacementPlugin());

module.exports = config;
