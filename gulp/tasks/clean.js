var gulp = require('gulp')
    , clean = require('gulp-clean')

module.exports = function() {
  return  gulp.src('./dist/*')
        .pipe(clean({
            force: true
        }))
}
