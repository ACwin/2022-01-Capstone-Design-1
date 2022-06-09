const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  productionSourceMap:false,
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:8020",
        ws: false,
      }
    }
  },
})
