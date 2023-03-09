const path = require('path');

module.exports = {
  entry: {
    index: './src/main/index.js',
    indexLogin: './src/login/indexLogin.js'
  },
  output: {
    path: path.resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|woff(2)?|ttf|eot|svg)$/i,
        use: ['file-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /[\\]node_modules[\\]/,
          name: "vendors",
          chunks: "all"
        }
      }
    }
  }
};
