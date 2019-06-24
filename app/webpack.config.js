const _ = require('lodash');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const WebappWebpackPlugin = require('webapp-webpack-plugin');

const webpack = require('webpack');

const mode = _(process.env).get('NODE_ENV', 'development');

const config = {
  mode,
  entry: {
    app: './src/index.js'
  },
  devtool: 'inline-source-map',
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './index.html'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new WebappWebpackPlugin({
      logo: './7399-cat-face.png'
    })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
};

if (_(['development']).includes(mode)) {
  _.set(config, 'resolve.alias.react-dom', '@hot-loader/react-dom');
  _.extend(config, {
    devServer: {
      contentBase: './dist',
      host: '0.0.0.0',
      hot: true,
      sockHost: '0.0.0.0'
    }
  });
}

module.exports = config;
