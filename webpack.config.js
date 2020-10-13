const { resolve } = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = (env) => {
  const isProd = env === "prod" ? true : false;

  //? Webpack config object
  const config = {
    mode: isProd ? "production" : "development",
    entry: "./src/js/index.js",
    output: {
      path: resolve(__dirname, "./dist"),
      filename: "js/bundle.js"
    },
    optimization: {
      //? Only runs optimizations in Prod.
      minimizer: [
        new TerserPlugin(),
        new HtmlWebpackPlugin({
          template: "./src/index.html",
          minify: {
            removeAttributeQuotes: true,
            collapseWhitespace: true,
            removeComments: true,
          },
        }),
      ]
    },
    module: {
      rules: [
        {
          test: /\.js$/i,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"]
            }
          }
        },
        {
          test: /\.scss$/i,
          use: [
            "style-loader",
            {
              loader: "css-loader",
              options: { importLoaders: 2 },
            },
            {
              loader: "postcss-loader",
              options: {
                postcssOptions: {
                  plugins: [["autoprefixer"]],
                },
              },
            },
            {
              loader: "sass-loader",
              options: {
                sourceMap: true,
              },
            },
          ],
        },
        {
          test: /\.html$/i,
          loader: "html-loader",
        },
      ],
    }
  };
  //? Add tooling and plugins to config obj
  //? depending on mode
  if (!isProd) {
    config.devtool = "inline-source-map";
    config.devServer = { contentBase: "./dist" };
    config.plugins = [
      new HtmlWebpackPlugin({
        template: "./src/index.html"
      }),
    ];
  };
  if (isProd) {
    config.plugins = [
      new CleanWebpackPlugin(),
    ];
  }
  //? return config obj
  return config;
};