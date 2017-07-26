var gulp = require('gulp')
    , sass = require('gulp-sass')
    , browserSync = require('./browsersync')
    , plumber = require('gulp-plumber')
    , assets = require('../assets')
    , util = require('util')
    , sourcemaps = require('gulp-sourcemaps')
    , concat = require('gulp-concat')

function handleError(error) {
    console.error("Syntax error: " + util.inspect(error));
    this.emit('end');
}

module.exports = function() {
    return gulp.src(assets.sass)
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(concat('/css/main.css'))
        .pipe(sass({
            outputStyle: 'compressed'
            , includePaths: ['./src/css', './src']
        }))
        .on('error', handleError)
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./dist'))
        .pipe(browserSync.stream())
}
