var webpack = require('webpack');
var path = require('path');
var autoprefixer = require('autoprefixer');

module.exports = {
  debug: true,
  context: path.join(__dirname, './src'),
  entry: {
    ts: './index.ts'
  },
  output: {
    path: path.join(__dirname, './dist'),
    library: 'Notifier',
    libraryTarget: 'umd',
    filename: 'bundle.js',
    umdNamedDefine: true
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: 'style!css!sass!postcss'
      },
      {
        test: /\.(js|ts)$/,
        exclude: /node_modules/,
        loaders: [
          'ts-loader'
        ]
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.ts']
  },
  postcss: [
    autoprefixer({
      browsers: ['last 2 versions']
    })
  ],
  plugins: [
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development') }
    }),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compressor: {
        warnings: false
      }
    })
  ]
}