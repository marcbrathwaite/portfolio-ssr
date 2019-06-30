const path = require('path')
const webpackNodeExternals = require('webpack-node-externals')

const config = {
  target: 'node',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  externals: [webpackNodeExternals()],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        query: {
          plugins: [
            "@babel/plugin-proposal-class-properties",
            "@babel/plugin-syntax-dynamic-import",
            "@babel/plugin-proposal-object-rest-spread",
            ["@babel/plugin-proposal-decorators", { legacy: true }]
          ]
        }
      },
      {
        test: /\.(sa|sc|c)ss$/,
        loader: 'css-loader'
      }
    ]
  }
}

module.exports = config