var gulp = require('gulp')
    , assets = require('../assets')
    , cleanhtml = require('gulp-htmlclean')

module.exports = function() {
    return gulp.src(assets.html)
        .pipe(cleanhtml())
        .pipe(gulp.dest('dist/'))
}
