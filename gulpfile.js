


const gulp = require('gulp');
const sass = require('sass');
const del = require('del');

const paths = {
    styles: {
      src: 'src/styles/style.sass',
      dest: 'dist/css'
    },
    scripts: {
      src: 'src/scripts/*.js',
      dest: 'dist/js'
    }
}

function clean(){
  return del(['dist'])
}
exports.clean = clean

function styles(){
  return gulp.src(paths.styles.src)
  .pipe(sass())
  .pipe(gulp.dest(paths.styles.dest))
}
exports.styles = styles
