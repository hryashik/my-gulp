let src_folder = '#src';
let dist_folder = 'dist';

let path = {
    src: {
        html: src_folder + '/index.html',
        allhtml: src_folder + '/**/*.html',
        css: src_folder + '/css/*.scss',
        js: src_folder + '/scripts/*.js'
    },
    dist: {
        html: dist_folder + '/',
        css: dist_folder + '/css',
        js: dist_folder + '/scripts'
    }
}

let { src, dest } = require('gulp');
let gulp = require('gulp');
let browsersync = require('browser-sync').create();
let sass = require('gulp-sass')(require('sass'));
let csso = require('gulp-csso');
let fileinclude = require('gulp-file-include');
let rename = require('gulp-rename');
let autoprefixer = require('gulp-autoprefixer');

function bSync() {
    browsersync.init({
        server: {
            baseDir: 'dist/'
        }
    })
}

function html() {
    return src(path.src.html)
        .pipe(fileinclude())
        .pipe(dest(path.dist.html))
        .pipe(browsersync.stream())
}

function css() {
    return src(path.src.css)
        .pipe(sass())
        .pipe(autoprefixer({
            cascade: false,
            overrideBrowserslist: ['last 3 versions']
        }))
        .pipe(dest(path.dist.css))
        .pipe(csso())
        .pipe(rename({
            extname: '.min.css'
        }))
        .pipe(dest(path.dist.css))
        .pipe(browsersync.stream())
}
function js() {
    return src(path.src.js)
        .pipe(dest(path.dist.js));
}

function watchFiles() {
    gulp.watch(path.src.allhtml, {ignoreInitial: false}, html);
    gulp.watch(path.src.css, css);
    gulp.watch(path.src.js, js)

}

exports.default = gulp.parallel(bSync, watchFiles);
exports.html = html;
