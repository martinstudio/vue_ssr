const { resolve } = require('path')
const merge = require('webpack-merge')
const base = require('./webpack.base.js')
const HtmlWebpackPlugin = require('html-webpack-plugin')

// 需要打包的是服务端，打包的是给node来用的
module.exports = merge(base, {
    mode: 'development',
    entry: {
        server: resolve(__dirname, '../src/server-entry.js')
    },
    target: 'node', // 打包的目标是给node来用的
    output: {
        libraryTarget: 'commonjs2', // 使用 module.exports 导出结果
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.server.html',
            template: resolve(__dirname, '../public/index.server.html'),
            excludeChunks: ['server'], //排除自动引用服务端的包
        })
    ]
})