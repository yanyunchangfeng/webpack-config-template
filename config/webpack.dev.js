const commonConfig = require('./webpack.common');
const path = require('path')
const { merge } = require('webpack-merge');
// console.log(process.env.NODE_ENV, 'process.env.NODE_ENV')
// 区分环境
// . --mode 用来设置模块内的process.env.NODE_ENV
// . --env  用来设置webpack配置文件的函数参数
// . cross-env用来设置node环境的 process.env.NODE_ENV
// . DefinePlugin 用来设置模块内的全局变量
module.exports = merge(commonConfig, {
    devtool: 'eval-cheap-module-source-map',
    cache: {
        // 不要使用cnpm 来安装模块 会有问题
        type: 'memory',// memory filesystem,  // 默认是在内存中存储
        // cacheDirectory:path.resolve(__dirname,'../node_modules/.cache/webpack') // 默认缓存目录
    },
    devServer: {
        port: 3001,
        compress: true, //启动压缩 gzip
        open: true,// 启动之后自动打开浏览器
        historyApiFallback: true,
    }
})
