const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');


const config = {
    entry: './src/index.js', // File đầu vào
    output: { // File đầu ra
        filename: 'bundle.js', // Tên file đầu ra
        path: path.resolve(__dirname, 'build') // Nơi chưa file đầu ra
    },
    module: {
        rules: [
            {
                use: 'babel-loader',
                test: /\.js$/
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'style.css'
        })
    ],
    mode: 'development',
}

module.exports = config;