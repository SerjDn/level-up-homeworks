const webpack = require('webpack'),
  ExtractTextPlugin = require('extract-text-webpack-plugin'),
  path = require('path');

module.exports = {
  entry: {
    'js/app': path.resolve(__dirname, "src/dev/js/app.js")
  },
  output: {
    path: path.resolve(__dirname, 'public/assets'),
    filename: "[name].js"
  },
  devtool: "source-map",
  module: {
    rules: [{
        test: /\.scss/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                alias: {
                  "../fonts": "materialize-css/dist/fonts"
                }
              }
            },
            {
              loader: "sass-loader",
              options: {
                includePaths: [
                  path.resolve("./node_modules/materialize-css/sass")
                ]
              }
            }
          ]
        })
      },
    {
      test: /\.woff2?$|\.ttf$|\.eot$|\.svg$/,
      use: [{
        loader: "file-loader",
        options: {
          name: '[name].[ext]',
          outputPath: 'fonts',
          publicPath: '../fonts'
        }
      }]
    }]
  },
  resolve: {
    extensions: ['.js', '.css', '.sass', '.scss']
  },
  plugins: [
    new ExtractTextPlugin('css/style.css')
  ]
};
