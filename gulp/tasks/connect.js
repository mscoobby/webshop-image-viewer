module.exports = function() {
    let proxy = require('http-proxy-middleware')
        , apiProxy = proxy('/api', {
            target: 'http://localhost:9000'
        })
        , history = require('connect-history-api-fallback')
        , fallback = history({
            verbose: true
        })
        , statics = require('serve-static')('dist')
        , logger = require('connect-logger')()
        , browserSync = require('./browsersync')

    browserSync.init({
            server: {
                baseDir: "dist/"
            }
            , notify: {
                styles: {
                    top: 0
                    , left: 0
                    , width: '200px'
                    , height: '50px'
                    , 'border-radius': 0
                }
            }
            , port: 9001
            , ui: {
                port: 9002
                , weinre: {
                    port: 9003
                }
            }
            , middleware: [logger, apiProxy, statics, fallback]
        })
        // connect.server({
        //     root: 'dist/'
        //     , port: 8000
        //     , middleware: function(connect, opt) {
        //         return [history()]
        //     }
        // })
}
