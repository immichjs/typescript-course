const path = require('path')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
  mode: 'production', //development
  entry: './src/main.ts',
  devServer: {
    static: path.join(__dirname, 'dist'),
    port: 3000,
    hot: true
  },
  output: {
    filename: 'app.min.js',
    path: path.join(__dirname, 'dist')
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: 'public' }
      ]
    })
  ],
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [{
      test: /\.ts$/,
      use: 'ts-loader',
      exclude: /node_modules/
    }]
  }
}
