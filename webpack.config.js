var webpack = require('webpack')

var sourceMapPlugin = new webpack.SourceMapDevToolPlugin({
  test: /\.js$/
})

module.exports = {
  entry: './src/main',
  output: {
    path: './dist',
    filename: 'main.js',
  },
  node: {
    global: true
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel' },
      { test: /\.json$/, loader: 'json'},
      { test: /\.css$/, loader: 'style-loader!css-loader' }
    ]
  },
  plugins: [sourceMapPlugin]
}
