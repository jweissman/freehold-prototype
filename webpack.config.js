const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const webpackMerge = require("webpack-merge");

const modeConfig = env => require(`./build-utils/webpack.${env}`)(env);

module.exports = ({ mode, presets } = { mode: "production", presets: [] }) => {
  return webpackMerge(
    {
      entry: "./src/index.tsx",
      mode,
      devtool: "source-map",
      module: {
        rules: [
          {
            test: /\.js$/,
            use: ["source-map-loader"],
            exclude: [path.resolve(__dirname, "node_modules/excalibur")],
            enforce: "pre",
          },
          {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
          },
          {
            test: /\.tsx?$/,
            use: "ts-loader",
            exclude: /node_modules/,
          },
          {
            test: /\.(png|jpg|bmp)$/,
            use: [
              {
                loader: "file-loader",
                options: {
                  emitFile: true,
                },
              },
            ],
          },
        ],
      },
      resolve: {
        extensions: [".tsx", ".ts", ".js"],
      },
      output: {
        filename: "[name].js",
        sourceMapFilename: "[file].map",
        path: path.resolve(__dirname, "dist"),
      },
      optimization: {
        splitChunks: {
          chunks: "all",
        },
      },
      plugins: [
        new CleanWebpackPlugin({}),
        new HtmlWebPackPlugin({
          title: "Freehold",
          template: "index.html",
        }),
      ],
    },
    modeConfig(mode)
  );
};
