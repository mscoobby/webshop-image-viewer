var gulp = require('gulp')
    , concat = require('gulp-concat')
    , uglify = require('gulp-uglify')
    , ngAnnotate = require('gulp-ng-annotate')
    , babel = require('gulp-babel')
    , plumber = require('gulp-plumber')
    , cache = require('gulp-cached')
    , remember = require('gulp-remember')
    , assets = require('../assets')

module.exports = function buildJs() {
    return gulp.src(assets.js)
        .pipe(plumber())
        .pipe(cache('jsfiles'))
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(ngAnnotate())
        .pipe(uglify({
            mangle: true
        }))
        .pipe(remember('jsfiles'))
        .pipe(concat("app.js", {
            newLine: ';'
        }))
        .pipe(gulp.dest("./dist/"))
}
