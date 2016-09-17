var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    "main": "./app/client"
  },

  output: {
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
    path: path.join('public', 'js'),
    publicPath: '/js/'
  },

  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'jsx-loader?harmony&insertPragma=React.DOM'
    }, {
      test: require.resolve('react'),
      loader: 'expose?React'
    }]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common',
      minChunks: 2
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ],

  node: {
    fs: 'empty'
      // net: 'empty',
      // tls: 'empty'
  },
};