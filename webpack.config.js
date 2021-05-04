const path = require('path')

// console.log('resolve', path.resolve());
// console.log('__dirname', path.join(__dirname, './dist'));

const config = {
    mode: "production",

    entry: './src/index.js',

    output: {
        filename: "bundle.js",
        path: path.join(__dirname, './dist')
    },

    module: {
        rules: [
            {
                // sass-loader node-sass两个依赖都需要安装
                test: /\.(sass|scss)$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    }
}

module.exports = config
