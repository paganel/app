const path = require('path')

module.exports = {
  entry: ['./overlay/index.js'],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              minimize: true,
              modules: true,
              localIdentName: '[name]__[local]___[hash:base64:6]',
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  output: {
    path: path.normalize(__dirname + '/../static'),
    publicPath: '/',
    filename: 'overlay.min.js',
  },
  devServer: {
    contentBase: './static',
  },
}
