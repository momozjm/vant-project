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
    //     // target: "http://172.22.11.222:30083/", // 杨政
    //     target: "http://172.23.40.202:30082/", // 测试环境
    //     // target: "http://172.22.12.28:30083/", // 徐家乐
    //     // target: "http://172.22.13.148:30083/", // 肖业彪
    //     // target: "http://172.23.40.202:30086/",
    //     changeOrigin: true,
    //     pathRewrite: {
    //       '^/api': '/'
    //     }
    //   }
    // }
  },
}
