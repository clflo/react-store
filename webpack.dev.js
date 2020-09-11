const merge = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public/'),
    publicPath: 'http://localhost:3000',
    port: 3000,
    hotOnly: true,
    open: false
  },
});
