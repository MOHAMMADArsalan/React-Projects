var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: path.resolve(__dirname, "jsx/index.html"),
    filename: "index.html",
    inject: "body"
})
module.exports = {
    entry: path.resolve(__dirname, "jsx") + '/app.jsx',
    output: {
        path: path.resolve(__dirname, "dist") + '/app',
        filename: "bundle.js"
    },
    resolve: {
        alias: {
            'react-redux': path.join(__dirname, '/node_modules/react-redux/dist/react-redux.min')
        }
    },
    module: {
        loaders: [
            {
                test: /\.jsx$|.js$/,
                exclude: /node_modules/,
                loader: ["babel-loader"],
                query: {
                    presets: ["react", "es2015", "stage-0"]
                }
            },
            { test: /\.css$/, loader: "style-loader!css-loader" }
        ]
    },
    plugins: [HtmlWebpackPluginConfig]
}
// module.exports = {
//     entry: './jsx/app.jsx', 
//     output: {
//         path: __dirname + '/dist/',
//         filename: 'bundle.js'
//     },
//     devtool: '#sourcemap', 
//     stats: {
//         colors: true,
//         reasons: true
//     },
//     module: {
//         loaders: [
//             {
//                 test: /\.jsx?$/,
//                 exclude: /(node_modules)/,
//                 loader: 'babel-loader' 
//             }
//         ]
//     }
// }