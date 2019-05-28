const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "index.html"
});

module.exports = {
  "mode": "production",
  "entry": "./src/index.js",
  "output": {
    "path": __dirname+'/dist',
    "filename": "[name].[chunkhash:8].js"
  },
  "devtool": "source-map",
  "module": {
    "rules": [
      {
        "enforce": "pre",
        "test": /\.(js|jsx)$/,
        "exclude": /node_modules/,
        "use": "eslint-loader"
      },
      {
        "test": /\.js(x?)$/,
        "exclude": /node_modules/,
        "use": {
          "loader": "babel-loader"
        }
      },
      {
        "test": /\.scss$/,
        "use": [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader"
        ]
      },
    ]
  },
  "plugins": [
    htmlPlugin,
    new MiniCssExtractPlugin({ filename: "[name]-[contenthash:8].css" })
  ]
};
