module.exports = {
  clearMocks: true,
  coverageDirectory: "coverage",
  testEnvironment: "node",
  rootDir: __dirname,
  modulePathIgnorePatterns: ["<rootDir>/dist/"],
  setupFiles: ["<rootDir>/loadershim.js"],
  coveragePathIgnorePatterns: ["<rootDir>/node_modules/"],
};
