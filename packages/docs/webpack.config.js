const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const remarkCodeImport = require("remark-code-import");
const remarkCodeImport = require("./scripts/codeImport");
const remarkEmbed = require("remark-oembed");
const remarkCodeSandbox = require("remark-codesandbox");
const remarkCodeMirror = require("remark-react-codemirror");
const remarkToc = require("remark-toc");
const remarkSlug = require("remark-slug");
const remarkPar = require("remark-squeeze-paragraphs");
const CopyPlugin = require("copy-webpack-plugin");
const { TsConfigPathsPlugin } = require("awesome-typescript-loader");
const ResourceHintWebpackPlugin = require("resource-hints-webpack-plugin");
const ReactDocgenTypescriptPlugin = require("react-docgen-typescript-plugin")
  .default;

// const ProgressiveManifest = require("webpack-pwa-manifest");

module.exports = {
  node: {},
  devtool: "inline-source-map",
  entry: "./src/index.js",
  target: "web",
  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        use: [
          "ts-loader",
          // {
          //   loader: require.resolve("react-docgen-typescript-loader"),
          //   options: {
          //     // Provide the path to your tsconfig.json so that your stories can
          //     // display types from outside each individual story.
          //     tsconfigPath: path.resolve(__dirname, "../ui/tsconfig.json"),
          //     // tsconfigPath: path.resolve(__dirname, "./tsconfig.json"),
          //     // docgenCollectionName: "__docgenInfo",
          //     // typePropName: "__docgenInfo",
          //     // shouldExtractLiteralValuesFromEnum: true,
          //     // setDisplayName: true,
          //     propFilter: (prop, component) => {
          //       if (
          //         prop.declarations !== undefined &&
          //         prop.declarations.length > 0
          //       ) {
          //         const hasPropAdditionalDescription = prop.declarations.find(
          //           (declaration) => {
          //             return !declaration.fileName.includes("node_modules");
          //           }
          //         );
          //         return Boolean(hasPropAdditionalDescription);
          //       }
          //       return true;
          //     },
          //   },
          // },
        ],
        // exclude: /node_modules/,
        include: [
          // /node_modules/,
          path.resolve(__dirname, "../ui/src"),
          path.resolve(__dirname, "../styled/src"),
          path.resolve(__dirname, "src"),
        ],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.mdx?$/,
        use: [
          "babel-loader",
          {
            loader: "@mdx-js/loader",
            options: {
              remarkPlugins: [
                remarkEmbed,
                remarkCodeSandbox,
                remarkCodeMirror,
                remarkToc,
                remarkSlug,
                remarkPar,
                remarkCodeImport,
              ],
            },
          },
          path.join(__dirname, "./scripts/mdx_webpack_frontmatter_loader.js"),
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
    // new ReactDocgenTypescriptPlugin({
    //   tsconfigPath: "../ui/tsconfig.json",
    //   docgenCollectionName: "RE_FLEX_UI",
    //   // exclude: ["./src/**/**.tsx", "./src/**/**.mdx", "./src/**/**.jsx"],
    //   include: ["../ui/src/**/*.tsx"],
    //   typePropName: "props",
    //   propFilter: (prop, component) => {
    //     console.log(`component`, component);
    //     if (prop.declarations !== undefined && prop.declarations.length > 0) {
    //       const hasPropAdditionalDescription = prop.declarations.find(
    //         (declaration) => {
    //           return !declaration.fileName.includes("node_modules");
    //         }
    //       );

    //       return Boolean(hasPropAdditionalDescription);
    //     }

    //     return true;
    //   },
    // }),
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
