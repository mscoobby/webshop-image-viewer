var gulp = require('./gulp')(['connect', 'lint-js', 'lint-html', 'clean', 'copy-html', 'build-js', 'build-css', 'watch', 'copy-assets'])
    , runSequence = require('run-sequence')

gulp.task('serve', function(callback) {
    runSequence('clean', ['lint-js', 'lint-html'], ['copy-html', 'build-css', 'build-js', 'copy-assets'], 'connect', 'watch', callback)
})

gulp.task('build', function(callback) {
    runSequence('clean', ['lint-js', 'lint-html'], ['copy-html', 'build-css', 'build-js', 'copy-assets'], callback)
})
