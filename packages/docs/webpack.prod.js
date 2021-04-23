const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const remarkCodeImport = require("remark-code-import");
const remarkEmbed = require("remark-oembed");
const remarkCodeSandbox = require("remark-codesandbox");
const remarkCodeMirror = require("remark-react-codemirror");
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
const WebpackPwaManifest = require("webpack-pwa-manifest");
const ReactDocgenTypescriptPlugin = require("react-docgen-typescript-plugin")
  .default;
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
          // {
          //   loader: require.resolve("react-docgen-typescript-loader"),
          //   options: {
          //     // Provide the path to your tsconfig.json so that your stories can
          //     // display types from outside each individual story.
          //     // tsconfigPath: path.resolve(__dirname, "../ui/tsconfig.json"),
          //     // savePropValueAsString: true,
          //     // shouldExtractLiteralValuesFromEnum: true,
          //     // // shouldRemoveUndefinedFromOptional: true,
          //     // skipPropsWithoutDoc: true,
          //     // shouldExtractValuesFromUnion: true,
          //     tsconfigPath: path.resolve(__dirname, "../ui/tsconfig.json"),
          //     // propFilter: (prop, component) => {
          //     //   if (!prop.parent) {
          //     //     return true;
          //     //   }

          //     //   return prop.parent.fileName.includes("@re-flex")
          //     //     ? true
          //     //     : !prop.parent.fileName.includes("node_modules");
          //     // },
          //   },
          // },
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
          "babel-loader",
          {
            loader: "@mdx-js/loader",
            options: {
              remarkPlugins: [
                remarkCodeImport,
                remarkEmbed,
                remarkCodeSandbox,
                remarkCodeMirror,
                remarkToc,
                remarkSlug,
                remarkPar,
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
        extractComments: () => {},
      }),
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    // new CompressionPlugin({
    //   filename: "[path][base].gz",
    //   algorithm: "gzip",
    //   test: /\.js$|\.css$|\.html$/,
    //   threshold: 10240,
    //   minRatio: 0.8,
    // }),
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
    new ReactDocgenTypescriptPlugin({ tsconfigPath: "../ui/tsconfig.json" }),
    new BundleAnalyzerPlugin(),
    // new WebpackPwaManifest({
    //   name: "Re-Flex UI",
    //   short_name: "My UI",
    //   description: "Re-Flex Minimal React UI Library",
    //   background_color: "#ffffff",
    //   crossorigin: "use-credentials", //can be null, use-credentials or anonymous
    //   icons: [
    //     {
    //       src: path.resolve("public/icons/android-icon.png"),
    //       sizes: [36, 48, 72, 96, 144, 192], // multiple sizes
    //       destination: path.join("icons", "android"),
    //     },
    //     {
    //       src: path.resolve("public/icons/apple-icon.png"),
    //       sizes: [57, 60, 72, 76, 114, 152,  180], // multiple sizes
    //       destination: path.join("icons", "ios"),
    //     },
    //     {
    //       src: path.resolve("public/icons/ms-icon-310x310.png"),
    //       size: "310x310", // you can also use the specifications pattern
    //     },
    //     {
    //       src: path.resolve("public/icons/ms-icon-310x310.png"),
    //       size: "310x310", // you can also use the specifications pattern
    //       purpose: "maskable",
    //     },
    //   ],
    // }),
  ],
};
