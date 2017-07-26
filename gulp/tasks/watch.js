const gulp = require('gulp')
    , cache = require('gulp-cached')
    , remember = require('gulp-remember')
    , browserSync = require('./browsersync')
    , assets = require('../assets')

function reload(done) {
    browserSync.reload()
    done()
}

gulp.task("html-watch", ['copy-html'], reload)

module.exports = function() {
    gulp.watch(assets.sass, ['build-css'])
    gulp.watch(assets.css, function() {
        return gulp.src(assets.css)
            .pipe(browserSync.stream())
    })
    gulp.watch(assets.html, ['html-watch'])
    gulp.watch(assets.js, ['build-js'])
        .on('change', function(event) {
            console.log('File ' + event.path + ' was ' + event.type)
            if (event.type === 'deleted') { // if a file is deleted, forget about it
                delete cache.caches['jsfiles'][event.path];
                remember.forget('jsfiles', event.path);
            }

        })
    gulp.watch('dist/app.js')
        .on('change', browserSync.reload)

}
