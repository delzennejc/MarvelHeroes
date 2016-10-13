/*eslint-disable*/
var webpack = require('webpack');
var path = require('path');

console.log("listen to http://localhost:8080\n\n");

module.exports = {
  debug: true,
  devtool: 'source-map',
  eslint: {
    configFile: '.eslintrc',
  },
  entry: [
    './app/index.js',
    'webpack-dev-server/client?http://localhost:8080',
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
  devServer: {
    historyApiFallback: true,
    contentBase: './dist'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
        __DEV__: JSON.stringify(JSON.parse('true'))
    }),
  ],
};
