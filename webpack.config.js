const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const APP_DIR = path.resolve(__dirname, './src');
const MODULES_DIR = path.resolve(__dirname, './node_modules');

const package = require('./package.json');

module.exports = {
  mode: 'development',
  entry: {
    app: APP_DIR +'/index.js',
    vendor: Object.keys(package.dependencies)
  },
  output: {
    publicPath: './',
    path: __dirname + '/dist',
    chunkFilename: '[name].[hash].js',
    filename: '[name].[hash].js'
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [ APP_DIR, MODULES_DIR ]
  },
  module: {
    rules: [
    {
      test: /\.jsx?$/,
      exclude: /node_modules/,
      include : APP_DIR,
      use: {
        loader: 'babel-loader'
      }
    }
    ]
  },
  optimization: {
    splitChunks: {
      chunks: "async",
      minSize: 30000,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'dynamic import',
      template: APP_DIR + '/index.html'
    }),
  ]
}
