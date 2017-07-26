const gulp = require('gulp')
    , bowerFiles = require('main-bower-files')()
    , filter = require('gulp-filter')
    , jsFilter = filter('**/*.js', {
        restore: true
    })
    , cssFilter = filter('**/*.css', {
        restore: true
    })
    , concat = require('gulp-concat')

module.exports = function() {
    return gulp.src(bowerFiles)
        .pipe(jsFilter)
        .pipe(concat('vendor.js'))
        .pipe(jsFilter.restore)
        .pipe(cssFilter)
        .pipe(concat('vendor.css'))
        .pipe(cssFilter.restore)
        .pipe(gulp.dest('dist/vendor'))
}
