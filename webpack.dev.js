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
config.optimization = {
  minimize: false,
  nodeEnv: false,
  sideEffects: true,
  concatenateModules: true,
  splitChunks: {
    chunks: 'all',
    maxInitialRequests: 10,
    minSize: 0,
    cacheGroups: {
      vendor: {
        test: /[\\/]node_modules[\\/]/,
        name(module) {
          const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
          return `npm.${packageName.replace('@', '')}`;
        },
      },
    },
  },
  runtimeChunk: true,
};
config.plugins.push(new webpack.NamedModulesPlugin());
config.plugins.push(new webpack.HotModuleReplacementPlugin());

module.exports = config;
