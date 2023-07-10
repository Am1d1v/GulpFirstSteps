


const gulp = import('gulp')
const sass = import('gulp-sass')
const del = import('del')
const babel = import('gulp-babel')
const uglify = import('gulp-uglify')
const concat = import('gulp-concat')

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
    .pipe(uglify())
    .pipe(concat())
}

function clean(){
  return del(['dist'])
}


function styles(){
  return gulp.src(paths.styles.src)
    .pipe(sass())
    .pipe(gulp.dest(paths.styles.dest))
}

exports.clean = clean
exports.styles = styles
