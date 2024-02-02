// const webpack = require('webpack');
const CompressionPlugin = require("compression-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  //   reactScriptsVersion: "react-scripts" /* (default value) */,
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      console.log("007", env);

      if (env !== "development") {
        webpackConfig.externals = {
          react: "React",
          "react-dom": "ReactDOM",
        };
      }

      return webpackConfig;
    },
    plugins: [
      new CompressionPlugin({
        filename: "[path][base].gz",
        algorithm: "gzip",
        test: /\.js$|\.css$|\.html$/,
        threshold: 10240,
        minRatio: 0.8,
      }),
      new MiniCssExtractPlugin({
        filename: "[name].[contenthash].css",
      }),
    ],
    optimization: {
      concatenateModules: true,
      flagIncludedChunks: true,
      splitChunks: {
        chunks: "all",
        minSize: 1000 * 600,
      },
      minimize: true,
      minimizer: [new TerserPlugin()],
    },
    output: {
      chunkFilename: "[name].[contenthash].js",
      filename: "[name].[contenthash].js",
      assetModuleFilename: "[name].[contenthash][ext][query]",
    },
  },
};
