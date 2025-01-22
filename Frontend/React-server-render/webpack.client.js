const path = require("path");

module.exports = {
  mode: "development",
  entry: "./client.js",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "client.bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              ["@babel/preset-react", { runtime: "automatic" }],
            ],
          },
        },
        exclude: /node_modules/,
      },
    ],
  },
};
