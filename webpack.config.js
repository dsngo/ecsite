const { join } = require("path");
const webpack = require("webpack");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

// Initial configurations
const pageTitle = "EC - Site";
const PATH = {
  app: join(__dirname, "app"),
  src: join(__dirname, "src"),
  root: join(__dirname, ""),
  nodeModules: join(__dirname, "node_modules"),
};
const developmentPort = 8080;

module.exports = (env = {}) => {
  console.log(env);
  const devtool = !env.production && "source-map";
  const stats = { colors: true, reasons: true, assets: true, errorDetails: true };
  const extensions = [".ts", ".tsx", ".css", ".scss", ".js", ".json"];
  const prodSassLoader = ExtractTextPlugin.extract({
    fallback: "style-loader",
    use: [
      {
        loader: "css-loader",
        options: { sourceMap: devtool === "source-map", importLoaders: 1 },
      },
      "sass-loader",
    ],
  });
  // Typescript compiling configurations
  const tsBundleConfig = {
    context: PATH.root,
    entry: {
      main: ["./src/index", "./src/css/index"],
    },
    mode: "development",
    output: {
      path: PATH.app,
      filename: "assets/js/[name].bundle.js",
      publicPath: "/",
      pathinfo: true,
    },
    stats,
    devServer: {
      hot: true,
      open: true,
      inline: true,
      port: developmentPort,
      publicPath: "/",
      compress: true,
      historyApiFallback: { disableDotRule: true },
      contentBase: join(__dirname, "app"),
      // https: true,
    },
    resolve: { extensions },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          include: PATH.src,
          use: [
            {
              loader: "ts-loader",
              options: { happyPackMode: true },
            },
          ],
        },
        {
          test: /\.s?css$/,
          include: join(PATH.src, "css"),
          use: env.production
            ? prodSassLoader
            : [
                "style-loader",
                {
                  loader: "css-loader",
                  options: { sourceMap: devtool === "source-map", importLoaders: 1 },
                },
                "sass-loader",
              ],
        },
      ],
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NamedModulesPlugin(),
      new HtmlWebpackPlugin({
        title: `${pageTitle} - Development`,
        filename: "index.html",
        template: join(__dirname, "src/template.ejs"),
      }),
    ],
  };
  // Webpack configurations
  if (!env.production) {
    tsBundleConfig.entry.main.unshift(`webpack-dev-server/client?http://localhost:${developmentPort}/`, "react-hot-loader/patch");
  }
  if (env.production) {
    delete tsBundleConfig.devServer;
    delete tsBundleConfig.output.pathinfo;
    tsBundleConfig.watch = false;
    tsBundleConfig.mode = "production";
    tsBundleConfig.output = {
      path: PATH.app,
      filename: "assets/js/[name].bundle.js",
      publicPath: "/",
    };
    tsBundleConfig.stats = "normal";
    tsBundleConfig.resolve.alias = {
      react: "preact-compat",
      "react-dom": "preact-compat",
    };
    tsBundleConfig.optimization = {
      splitChunks: {
        cacheGroups: {
          commons: {
            test: /[\\/]node_modules[\\/]/,
            name: "manifest",
            chunks: "all"
          },
        },
      },
    };
    tsBundleConfig.plugins = [
      new OptimizeCssAssetsPlugin({
        assetNameRegExp: /\.css$/g,
        cssProcessor: require("cssnano"),
        cssProcessorOptions: { discardComments: { removeAll: true } },
        canPrint: true,
      }),
      new ExtractTextPlugin({ filename: "assets/css/bundle.css", allChunks: true }),
      new HtmlWebpackPlugin({
        title: `${pageTitle}`,
        filename: "index.html",
        template: join(__dirname, "src/template.ejs"),
      }),
    ];
  }
  const config = [tsBundleConfig];
  return config;
};
