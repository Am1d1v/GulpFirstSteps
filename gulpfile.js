


const gulp = import('gulp');
const sass = import('gulp-sass');
const del = import('del');

const paths = {
    styles: {
      src: 'src/styles/*.sass',
      dest: 'dist/sass/'
    },
    scripts: {
      src: 'src/scripts/*.js',
      dest: 'dist/js/'
    }
}

function scripts() {
  return gulp.src(paths.scripts.src)
    .pipe(babel())
}

function clean(){
  return del(['dist'])
}


function styles(){
  return gulp.src(paths.styles.src)
    .pipe(gulp-sass())
    .pipe(gulp.dest(paths.styles.dest))
}

exports.clean = clean
exports.styles = styles
