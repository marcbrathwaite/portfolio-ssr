const debug = process.env.NODE_ENV !== "production";
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
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
        // if not production
        use: debug
          ? [
              {
                loader: "style-loader"
              },
              {
                loader: "css-loader"
              },
              {
                loader: "sass-loader"
              }
            ]
          : [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      }
    ]
  }
};
