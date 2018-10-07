const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: './src/main.js',
  output: {
    path:path.resolve(__dirname,'dist'),
    //方法一（最好不要这样做）
    filename: 'bundle.js'
  },
  plugins: [
    new htmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      minify:{
        collapseWhitespace : true
      }
    }),
    new VueLoaderPlugin(),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "windows.jQuery": "jquery"
    })
  ],
  performance: {
    hints: 'warning', // 枚举

    maxAssetSize: 300000, // 整数类型（以字节为单位）

    maxEntrypointSize: 500000, // 整数类型（以字节为单位）

    assetFilter: function(assetFilename) {
      // 提供资源文件名的断言函数

      return assetFilename.endsWith('.css') || assetFilename.endsWith('.js');
    }
  },
  module: {
    rules: [
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
      { test: /\.jpg|png$/, use: ['url-loader'] },
      { test: /\.(eot|ttf|svg|woff|woff2)$/, use: ['url-loader'] },
      { test: /\.vue$/, use: ['vue-loader'] }
    ]
  }
};
