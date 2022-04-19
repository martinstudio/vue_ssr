const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const merge = require('webpack-merge')
const base = require('./webpack.base.js')
module.exports = merge(base, {
    mode: 'development',
    entry: {
        client: resolve(__dirname, '../src/client-entry.js')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: resolve(__dirname, '../public/index.client.html'),
            filename: 'index.client.html',
            minify: false
        })
    ]
})