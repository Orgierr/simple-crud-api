// Generated using webpack-cli https://github.com/webpack/webpack-cli
const path = require("path");

const isProduction = process.env.NODE_ENV == "production";

const config = {
  target: 'node',
  entry: "./src/server/server.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: 'server.js',
  },
  plugins: [
    // Add your plugins here
    // Learn more about plugins from https://webpack.js.org/configuration/plugins/
  ],

};

module.exports = () => {
  if (isProduction) {
    config.mode = "production";
  } else {
    config.mode = "development";
  }
  return config;
};
