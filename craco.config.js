// const webpack = require('webpack');
const CompressionPlugin = require("compression-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  //   reactScriptsVersion: "react-scripts" /* (default value) */,

  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      webpackConfig.externals = {
        react: {
          root: "React",
          commonjs2: "react",
          commonjs: "react",
          amd: "react",
        },
        "react-dom": {
          root: "ReactDOM",
          commonjs2: "react-dom",
          commonjs: "react-dom",
          amd: "react-dom",
        },
      };
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
  },
};
