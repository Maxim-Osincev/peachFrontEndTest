const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  entry: "./src/index.js",
  module: {
    rules: [
      {
        test: /.jsx$/,
        use: ["babel-loader"],
      },
      {
        test: /.s?css$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.html$/,
        use: "html-loader",
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file-loader",
      },
      {
        test: /\.(jpg|png|svg|jpeg|gif)$/,
        type: "asset/resource",
      },
    ],
  },
  output: {
    clean: true,
    filename: "bundle.js",
    assetModuleFilename: "assets/images/[name][ext]",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),

    new webpack.ProgressPlugin(),
  ],
  devServer: {
    port: 8080,
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
};
