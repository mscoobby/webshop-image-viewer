var gulp = require('gulp')
    , htmlhint = require('gulp-htmlhint')
    , assets = require('../assets')
    , plumber = require('gulp-plumber')

module.exports = function() {
    return gulp.src([...assets.html, '!./src/bower_components/**'])
        .pipe(plumber())
        .pipe(htmlhint('.htmlhintrc'))
        .pipe(htmlhint.reporter('htmlhint-stylish'))
        // .pipe(htmlhint.failReporter({
        //     suppress: true
        // }))
}
