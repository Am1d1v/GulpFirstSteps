

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const rename = require('gulp-rename');
const cleanCss = require('gulp-clean-css');
const build = gulp.series(styles, watch);

const paths = {
    styles: {
        src: 'src/style/style.css',
        dest: 'dist/css/'
    },
    scripts: {
        src: 'src/scripts/main.js',
        dest: 'dist/js/'
    }
}

function styles(){
    return gulp.src(paths.styles.src)
    .pipe(sass())
    .pipe(cleanCss())
    .pipe(rename({
        basename: 'style',
        suffix: '.min'
    }))
    .pipe(gulp.dest(paths.styles.dest))
}

function watch(){
    gulp.watch(paths.styles.src, styles)
}



exports.styles = styles;
exports.watch = watch;
exports.build = build;
exports.default = build;