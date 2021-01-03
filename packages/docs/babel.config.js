module.exports = {
  presets: [
    [
      "@babel/preset-env",
      { targets: "last 4 versions, ie 11", modules: false },
    ],
    "@babel/preset-react",
    "@babel/preset-typescript",
    "@emotion/babel-preset-css-prop",
  ],
  plugins: [
    ["@babel/plugin-proposal-class-properties", { loose: true }],
    "@emotion/babel-plugin",
  ],
};
