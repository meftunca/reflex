const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const remarkCodeImport = require("remark-code-import");
const remarkEmbed = require("remark-oembed");
const remarkCodeSandbox = require("remark-codesandbox");
const remarkCodeMirror = require("remark-react-codemirror");
const remarkFM = require("remark-frontmatter");
const remarkToc = require("remark-toc");
const remarkSlug = require("remark-slug");
const remarkPar = require("remark-squeeze-paragraphs");
const CopyPlugin = require("copy-webpack-plugin");
const { TsConfigPathsPlugin } = require("awesome-typescript-loader");
const ResourceHintWebpackPlugin = require("resource-hints-webpack-plugin");
// const ProgressiveManifest = require("webpack-pwa-manifest");

module.exports = {
  node: {},
  devtool: "inline-source-map",
  entry: "./src/index.js",
  target: "web",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          { loader: "awesome-typescript-loader" },
          {
            loader: require.resolve("react-docgen-typescript-loader"),
            options: {
              // Provide the path to your tsconfig.json so that your stories can
              // display types from outside each individual story.
              // tsconfigPath: path.resolve(__dirname, "../ui/tsconfig.json"),
              // savePropValueAsString: true,
              // shouldExtractLiteralValuesFromEnum: true,
              // // shouldRemoveUndefinedFromOptional: true,
              // skipPropsWithoutDoc: true,
              // shouldExtractValuesFromUnion: true,
              tsconfigPath: path.resolve(__dirname, "../ui/tsconfig.json"),
              propFilter: (prop, component) => {
                if (!prop.parent) {
                  return true;
                }

                return prop.parent.fileName.includes("@re-flex")
                  ? true
                  : !prop.parent.fileName.includes("node_modules");
              },
            },
          },
        ],
        include: [
          path.resolve(__dirname, "../ui/src"),
          path.resolve(__dirname, "src"),
        ],
        // exclude: /node_modules/,
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },

      {
        test: /\.mdx?$/,
        use: [
          { loader: "babel-loader" },
          {
            loader: "@mdx-js/loader",
            options: {
              remarkPlugins: [
                remarkCodeImport,
                remarkEmbed,
                remarkCodeSandbox,
                remarkCodeMirror,
                remarkFM,
                remarkToc,
                remarkSlug,
                remarkPar,
              ],
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".mjs", ".tsx", ".ts", ".js", ".jsx", ".json", ".md", ".mdx"],
    alias: {
      docz: path.resolve(__dirname, "src/docz"),
    },
  },
  output: {
    path: path.join(__dirname, "dist"),
    publicPath: "/",
    // filename: "bundle.js",
    filename: "[name].bundle.js",
    // chunkFilename: "[name].[chunkhash].js",
  },
  devServer: {
    contentBase: ["./public", "./dist"],
    // writeToDisk: true,
    // disableHostCheck: true,
    historyApiFallback: true,
    port: 3333,
    hot: true,
  },

  plugins: [
    new CopyPlugin({
      patterns: [{ from: "public", to: "dist" }],
    }),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: "public/index.html",
      filename: "index.html",
      prefetch: ["**/*.*"],
      preload: ["**/*.*"],
    }),
    new ResourceHintWebpackPlugin(),
    new TsConfigPathsPlugin({
      configFileName: "tsconfig.json",
      useTranspileModule: true,
      transpileOnly: true,
      useBabel: true,
    }),
  ],
};
