const fs = require('fs');
const path = require("path");
// const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
    entry: ["./index.js","./src/styles/styles.scss"],
    output: {
        path: path.join(__dirname, "public"),
        filename: "dist/app.js"
    },
    module: {
        rules : [
            {
                test: /\.s?[ac]ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    { loader: 'css-loader', options: { url: false, sourceMap: true } },
                    { loader: 'sass-loader', options: { sourceMap: true } }
                ],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: "babel-loader"
            }
        ]
    },
    devtool: "source-map",
    plugins: [
        new MiniCssExtractPlugin({
            filename: "dist/app.css"
        })
    ],
    mode : devMode ? 'development' : 'production',
    devServer: {
        https: true,
        cert: fs.readFileSync('/Users/desb/Projects/ssl/localhost/ia.localhost.crt'),
        key: fs.readFileSync('/Users/desb/Projects/ssl/localhost/ia.localhost.key'),
        contentBase: path.join(__dirname, "public"),
        historyApiFallback: true,
        compress: true,
        port: 8443
    }
};