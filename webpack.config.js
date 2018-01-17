const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
      path: path.resolve(__dirname, 'public/')
  },

  module: {
      rules: [
          {
            test: /\.js$/,
              exclude: /node_modules/,
              loader: 'babel-loader',
              query: {
                  presets: ['env', 'react']
              }
          },
          {
            test: /\.css$/,
            loader: "style-loader!css-loader",
            exclude: /node_modules/
          },
        ]
  }
};
