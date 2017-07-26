const gulp = require('gulp')
const util = require('gulp-util')
const assets = require('../assets')
const merge = require('merge-stream')
const resize = require('gulp-image-resize')
const filter = require('gulp-filter')

module.exports = function() {
    let base = {
        base: 'src'
    }

    let images = gulp.src(assets.images, base)


    let fullImages = filter(['src/img/*.jpg', 'src/img/*.png'], {
            restore: true
        }),
        thumbs = filter(['src/img/*-thumb.jpg', 'src/img/*-thumb.png'], {
            restore: true
        })

    /* beautify ignore:start */
    images = images
            .pipe(fullImages)
            .pipe(resize({width:1140, height:640, upscale:true, crop:true}))
            .pipe(fullImages.restore)
            .pipe(thumbs)
            .pipe(resize({width:110, height:110, upscale:true, crop:true}))
            .pipe(thumbs.restore)
            /* beautify ignore:end */

    images.pipe(gulp.dest('dist/'))
    let webassets = gulp.src(assets.webassets, base)
        .pipe(gulp.dest('dist/'))

    return merge(webassets, images)
}
