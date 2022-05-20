const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ServiceWorkerWebpackPlugin = require('serviceworker-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src/scripts/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/templates/index.html'),
      filename: 'index.html',
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/public/'),
          to: path.resolve(__dirname, 'dist/'),
        },
      ],
    }),
    new ServiceWorkerWebpackPlugin({
      entry: path.resolve(__dirname, 'src/scripts/sw.js'),
    }),
    new WebpackPwaManifest({
      name: 'Restopedia',
      short_name: 'Restoped',
      description:
        'Restopedia is a simple app that helps you find restaurants in your area',
      background_color: '#000000',
      crossorigin: 'use-credentials', //can be null, use-credentials or anonymous
      icons: [
        {
          src: path.resolve('src/assets/favicon.png'),
          sizes: [96, 128, 256, 384, 512], // multiple sizes
        },
        {
          src: path.resolve('src/assets/favicon.png'),
          size: '1024x1024', // you can also use the specifications pattern
        },
        {
          src: path.resolve('src/assets/favicon.png'),
          size: '1024x1024',
          purpose: 'maskable',
        },
      ],
    }),
  ],
};
