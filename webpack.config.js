const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const { CleanWebpackPlugin } = require('clean-webpack-plugin')

console.log('resolve', path.resolve());
console.log('__dirname', path.join(__dirname, './dist'));

const config = {
    mode: "production",

    entry: './src/index.js',

    output: {
        filename: "bundle.[chunkhash:8].js",
        path: path.join(__dirname, './dist')
    },

    devServer: {
        hot: true,
        port: 8060
    },

    module: {
        rules: [
            {
                // sass-loader node-sass两个依赖都需要安装
                test: /\.(sass|scss)$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader']
            },
            {
                test: /\.js$/,
                loader: 'babel-loader'
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "template.html"
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
}

module.exports = config
