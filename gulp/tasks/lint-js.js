var gulp = require('gulp')
    , jshint = require('gulp-jshint')
    , assets = require('../assets')

module.exports = function() {
    return gulp.src([...assets.js, '!./src/bower_components/**'])
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish', {beep: true}))
}
