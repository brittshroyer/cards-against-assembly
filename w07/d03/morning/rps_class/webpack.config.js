var webpack = require('webpack');

module.exports = {
  /* Where my javascript files are located*/
  entry: [
    './javascripts/main.js',
    './javascripts/file2.js'
  ],
  /* The name of my concatoned file, and where to put it */
  output: {
    filename: 'bundle.js',
    path: './javascripts'
  },
  /* My extra's that I am adding to webpacks process , in this case
  we are only minifying */
  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ],
  /* Define my loaders for preprocessed files, in this case
  we only want to use the Babel preprocessor */
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
}
