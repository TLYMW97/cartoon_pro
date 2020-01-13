module.exports = {
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