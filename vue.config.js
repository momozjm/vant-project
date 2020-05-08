module.exports = {
  lintOnSave: true,
  publicPath: '/',
  outputDir: "dist",
  assetsDir: "static",
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require('postcss-pxtorem')({
            rootValue: 37.5, // 换算的基数
            propList: ['*'],
          }),
        ]
      }
    }
  },
  devServer: {
    // development server port 8000
    // port: 8000,
    // // If you want to turn on the proxy, please remove the mockjs /src/main.jsL11
    // proxy: {
    //   "/api": {
    //     // target: "http://xx.xx.xx.xx:xxxx/",
    //     changeOrigin: true,
    //     pathRewrite: {
    //       '^/api': '/'
    //     }
    //   }
    // }
  },
  productionSourceMap: false,
}
