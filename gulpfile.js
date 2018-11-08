const gulp = require('gulp');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');


gulp.task('default', ['compile-js', 'compile-sass']);


gulp.task('compile-js', function () {
  return gulp
    .src('src/js/finest-form.js')
    .pipe(gulp.dest('dist'))
    .pipe(uglify())
    .on('error', function (err) { console.error(err.toString()); })
    .pipe(rename('finest-form.min.js'))
    .pipe(gulp.dest('dist'));
});


gulp.task('compile-sass', function () {
  return gulp
    .src('src/scss/finest-form.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist'))
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(rename('finest-form.min.css'))
    .pipe(gulp.dest('dist'));
});
