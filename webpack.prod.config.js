/*eslint-disable*/
var path = require('path');
var webpack = require('webpack');
var SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');

console.log("Compiling for production...", path.resolve(__dirname, 'dist/'));

module.exports = {
  context: __dirname,
  eslint: {
    configFile: '.eslintrc',
  },
  entry: [
    './app/index.js',
  ],
  output: {
    path: path.resolve(__dirname, 'dist/'),
    publicPath: path.resolve(__dirname, '/'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      },
    },
    {
      exclude: /node_modules/,
      loaders: ["babel-loader?plugins=transform-runtime&presets[]=es2015&presets[]=stage-1&presets[]=react", "eslint-loader"],
      test: /\.js$/,
    },
    {
      test: /\.less$/,
      loader: "style!css!less",
    }],
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
    new webpack.DefinePlugin({
        __DEV__: JSON.stringify(JSON.parse('false'))
    }),
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false }
    }),
    new SWPrecacheWebpackPlugin(
      {
        cacheId: "marvelHeroes",
        filename: "marvelHeroes.service-worker.js",
      }
    ),
  ],
};
