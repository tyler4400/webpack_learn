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
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    }
}

module.exports = config
