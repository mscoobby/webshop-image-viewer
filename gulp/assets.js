'use strict'
const util = require('gulp-util')
    , feHTML = ['src/*.html', 'src/**/*.html', 'src/**/**/*.html']
    // Front-end sass/scss files.
    , feSass = ['src/css/*.scss']
    , feJS = ['src/js/*.js']
    , webassets = ['src/favicon.ico']
    // All frontend files.
    , feFiles = [...feJS, ...feSass]
    // Images.
    , images = ['src/img/*', 'src/img/**/*']

module.exports = {
    html: feHTML
    , sass: feSass
    , js: feJS
    , images
    , webassets
    , all: feFiles
    , css: 'dist/css/main.css'
}
