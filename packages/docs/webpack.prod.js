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
const CompressionPlugin = require("compression-webpack-plugin");
const zlib = require("zlib");
const TerserPlugin = require("terser-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
const ResourceHintWebpackPlugin = require("resource-hints-webpack-plugin");
// const ProgressiveManifest = require("webpack-pwa-manifest");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  node: {},
  devtool: "inline-source-map",
  entry: "./src/index.js",
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
              // propFilter: (prop, component) => {
              //   if (!prop.parent) {
              //     return true;
              //   }

              //   return prop.parent.fileName.includes("@re-flex")
              //     ? true
              //     : !prop.parent.fileName.includes("node_modules");
              // },
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
    path: path.join(__dirname, "../../docs"),
    publicPath: "https://meftunca.github.io/reflex/",
    // filename: "bundle.js",
    filename: "[name].bundle.js",
    chunkFilename: "[name]-chunk.[id].js",

    // chunkFilename: "[name].[chunkhash].js",
  },
  optimization: {
    runtimeChunk: "single",
    splitChunks: {
      chunks: "all",
      maxInitialRequests: Infinity,
    },
    minimizer: [
      new TerserPlugin({
        parallel: true,
        cache: true,
        extractComments: () => {},
      }),
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CompressionPlugin({
      filename: "[path][base].gz",
      algorithm: "gzip",
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.8,
    }),
    new CompressionPlugin({
      filename: "[path][base].br",
      algorithm: "brotliCompress",
      test: /\.(js|css|html|svg)$/,
      compressionOptions: {
        level: 11,
      },
      threshold: 10240,
      minRatio: 0.8,
    }),

    new CopyPlugin({
      patterns: [
        { from: "public/icons", to: "./icons" },
        { from: "public/manifest.json", to: "./manifest.json" },
        { from: "public/browserconfig.xml", to: "./browserconfig.xml" },
      ],
    }),
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
    new BundleAnalyzerPlugin(),
  ],
};
