const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const extractStyles = new ExtractTextPlugin('[name]-[hash].css');

module.exports = {
  stats: {
    children: false,
    hash: false,
    reasons: false,
    version: false
  },
  entry: {
    app: './src/app/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name]-[hash].js'
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ['html-loader']
      },
      {
        test: /\.(jpg|png)$/,
        use: ['file-loader']
      },
      {
        test: /\.scss$/,
        use: extractStyles.extract({
          use: ['css-loader', 'postcss-loader', 'sass-loader']
        })
      }
    ]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: false,
      options: {
        postcss: [
          autoprefixer({
            browsers: [
              'last 3 Android versions',
              'last 4 iOS versions',
              'last 5 Chrome versions',
              'last 8 ChromeAndroid versions',
              'last 4 ExplorerMobile versions',
              'last 5 FirefoxAndroid versions'
            ]
          })
        ]
      }
    }),
    extractStyles,
    new webpack.optimize.UglifyJsPlugin({}),
    // new CopyWebpackPlugin([{ from: 'src/static/png', to: 'assets' }]),
    new HtmlWebpackPlugin({
      template: 'src/html/index.html',
      inject: 'body'
    })
  ]
};
