

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const rename = require('gulp-rename');
const cleanCss = require('gulp-clean-css');

const build = gulp.series(scripts, styles, watch);

const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');
const autoPrefixer = require('gulp-autoprefixer');

const paths = {
    styles: {
        src: 'src/style/style.css',
        dest: 'dist/css/'
    },
    scripts: {
        src: 'src/scripts/*.js',
        dest: 'dist/js/'
    }
}

function styles(){
    return gulp.src(paths.styles.src)
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(autoPrefixer({
        cascade: false
    }))
    .pipe(cleanCss())
    .pipe(rename({
        basename: 'style',
        suffix: '.min'
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(paths.styles.dest))
}


// Watcher Function
function watch(){
    gulp.watch(paths.styles.src, styles)
    gulp.watch(paths.scripts.src, scripts)
}


// Gulp JS Scripts
function scripts(){
    return gulp.src(paths.scripts.src)
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(uglify())
    .pipe(concat('main.min.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(paths.scripts.dest))
}



exports.styles = styles;
exports.watch = watch;
exports.scripts = scripts;
exports.build = build;
exports.default = build;