const path = require('path');
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode:  process.env.NODE_ENV || 'production',
    entry: './src/script.tsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.[contenthash].js"
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: 'babel-loader',
            exclude: /node-modules/
        },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.svg$/,
                type: 'asset/resource'
            }, {
                test: /\.(ts|tsx)$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx'],
    },
    plugins: [
        new htmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    devServer: {
        open: true,
    }

}