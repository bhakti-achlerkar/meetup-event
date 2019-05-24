const MiniCssExtractPlugin = require("mini-css-extract-plugin");
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
              "test": /\.js$/,
              "exclude": /node_modules/,
              "use": {
                  "loader": "babel-loader",
                  "options": {
                      "presets": [
                          "env"
                      ]
                  }
              }
          },
          {
              "test": /\.scss$/,
              "use": [
                  MiniCssExtractPlugin.loader,
                  "css-loader",
                  "sass-loader"
              ]
          }
      ]
  },
  "plugins": [new MiniCssExtractPlugin({filename: "[name]-[contenthash:8].css"})]
};
