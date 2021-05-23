module.exports = {
  presets: [
    [
      "@babel/env",
      {
        targets: {
          esmodules: true,
        },
      },
    ],
    "@babel/react",
    "@babel/preset-typescript",
    "@emotion/babel-preset-css-prop",
  ],
  plugins: ["@emotion/babel-plugin"],
};
