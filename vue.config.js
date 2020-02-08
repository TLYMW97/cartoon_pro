module.exports = {
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          'primary-color': '#fd113a',
          'link-color': '#fd113a'
        },
        javascriptEnabled: true
      }
    }
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://120.27.238.17:8080',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
};
