var webpack = require('webpack');
var path = require('path');

module.exports = {
  devtool: 'inline-source-map',
  entry: [
    './src'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  plugins: [
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'src'),
    }]
  }
};
