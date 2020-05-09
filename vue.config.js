const CompressionWebpackPlugin = require('compression-webpack-plugin');
const productionGzipExtensions = ['js', 'css'];

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  publicPath: './',
  configureWebpack: config => {
    config.externals = {
      vue: 'Vue',
      'vue-router': 'VueRouter',
      vuex: 'Vuex',
      axios: 'axios'
    };
    config.plugins.push(
      new CompressionWebpackPlugin({
        algorithm: 'gzip',
        test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
        threshold: 10240,
        minRatio: 0.8
      })
    );
  },
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          'primary-color': '#1890ff',
          'link-color': '#1890ff',
          'success-color': '#52c41a', // 成功色
          'warning-color': '#faad14', // 警告色
        },
        javascriptEnabled: true
      }
    }
  },
  chainWebpack: config => {
    config.plugins.delete('prefetch');
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://120.27.238.17:8090',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
};
