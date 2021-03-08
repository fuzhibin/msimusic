module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                'assets': '@/assets',
                'components': '@/components',
                'network': '@/network',
                'views': '@/views',
                'common': '@/common'
            }
        }
    },
    assetsDir: 'static',
    parallel: false,
    publicPath: './',
}