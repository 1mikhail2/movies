const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    main: path.resolve(__dirname, './src/index.js'),
  },

  /*output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
  },*/

  output: {
    filename: 'bundle.js',
    path: path.resolve('dist'),
    publicPath: '/',
  },

  mode: 'development',
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
  ],
  devServer: {
    client: {
      overlay: false,
    },
    historyApiFallback: true,
    static: {
      directory: path.join(__dirname, "./dist")
    },
    open: true,
    compress: true,
    hot: true,
    port: 8080,
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'webpack Boilerplate',
      template: path.resolve(__dirname, './src/index.html'),
      filename: 'index.html',
      favicon: './favicon.ico'
    }),
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|)$/,
        type: 'asset/inline',
      },
      {
        test: /\.(scss|css)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.svg$/,
        loader: 'svg-sprite-loader'
      }
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
}