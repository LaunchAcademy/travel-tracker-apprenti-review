var webpack = require('webpack');
let WriteFilePlugin = require('write-file-webpack-plugin');

module.exports = {
  entry: {
    path: './client/src/main.js'
  },
  output: {
    path: __dirname+'/public',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  devtool: 'eval-source-map',
  plugins: [
    new WriteFilePlugin()
  ],
  devServer: {
    contentBase: './public',
    inline: true
  }
}
