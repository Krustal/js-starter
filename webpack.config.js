'use strict';

var webpack = require('webpack');

module.exports = {
  entry: {
    main: [
      "webpack/hot/dev-server",
      __dirname + "/src/main.js"
    ]
  },
  devtool: 'source-map',
  devServer: {
    contentBase: './public'
  },
  debug: true,
  output: {
    path: __dirname + "/public/assets",
    filename: "[name].bundle.js",
    sourceMapFilename: "debugging/[file].map",
    publicPath: '/assets/',
    pathinfo: true
  },
  resolveLoader: {
    moduleDirectories: ['node_modules']
  },
  resolve: {
    root: [__dirname + "/src/ ", __dirname + "/src/styles" ],
    extensions: ['', '.js', '.coffee', '.jsx', '.css']
  },
  module: {
    preloaders: [
      { test: /\.js$/, loader: 'source-map' }
    ],
    loaders: [
      { test: /\.jsx?$/, exclude: /(node_modules|bower_components)/, loader: 'babel' },
      { test: /\.css$/, loader: "style!css" },
      { test: /\.sass$/, loader: "style!css!sass?indentedSyntax" }
    ]
  }
}
