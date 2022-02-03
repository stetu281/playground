const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const WebpackPrettierPlugin = require("webpack-prettier-plugin");

module.exports = {
  entry: "./src/assets/js/app.js",
  plugins: [
    new HTMLWebpackPlugin({
      template: "./src/assets/html/index.html",
      favicon: "./src/assets/images/favicons/512-fav.png",
    }),
    new CleanWebpackPlugin(),
    new WebpackPrettierPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ["html-loader"],
      },
      {
        test: /\.(svg|png|jpg|gif)$/,
        type: "asset/resource",
      },
    ],
  },
};
