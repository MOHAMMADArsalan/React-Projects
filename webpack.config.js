var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: path.resolve(__dirname,"src/index.html"),
    filename:"index.html",
    inject: "body"
})
module.exports = {
    entry: path.resolve(__dirname,"src") + '/app/index.jsx',
    output: {
        path: path.resolve(__dirname,"dist") + '/app',
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                include: path.resolve(__dirname,"src"),
                loader:["babel-loader"],
                query: {
                    presets: ["react","es2015","stage-0"]
                }
            }
        ]
    },
    plugins:[HtmlWebpackPluginConfig]
}