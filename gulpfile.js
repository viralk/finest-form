const gulp = require('gulp');
const sass = require('gulp-sass');
const rename = require('gulp-rename');

gulp.task('default', [
  'sass-compile',
  'sass-compile-min',
  'js-compile',
  // 'js-compile-min'
]);

gulp.task('sass-compile', function () {
  return gulp.src('src/scss/finest-form.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist'));
});

gulp.task('sass-compile-min', function () {
  return gulp.src('src/scss/finest-form.scss')
    .pipe(rename('finest-form.min.css'))
    .pipe(sass().on('error', sass.logError))
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(gulp.dest('dist'));
});

gulp.task('js-compile', function () {
  return gulp.src('src/js/finest-form.js')
    .pipe(gulp.dest('dist'));
});

// gulp.task('js-compile-min', function() {
//   return gulp.src('src/js/finest-form.js')
//   .pipe(rename('finest-form.min.js'))
//   .pipe(uglify())
//   .pipe(gulp.dest('dist'));
// });
