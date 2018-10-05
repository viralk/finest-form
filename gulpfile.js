// const gulp = require('gulp');
// const sass = require('gulp-sass');
// const rename = require('gulp-rename');

// gulp.task('default', [
//   'sass-compile',
//   'sass-compile-min',
//   'js-compile',
//   // 'js-compile-min'
// ]);

// gulp.task('sass-compile', function () {
//   return gulp.src('src/scss/finest-form.scss')
//     .pipe(sass().on('error', sass.logError))
//     .pipe(gulp.dest('dist'));
// });

// gulp.task('sass-compile-min', function () {
//   return gulp.src('src/scss/finest-form.scss')
//     .pipe(rename('finest-form.min.css'))
//     .pipe(sass().on('error', sass.logError))
//     .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
//     .pipe(gulp.dest('dist'));
// });

// gulp.task('js-compile', function () {
//   return gulp.src('src/js/finest-form.js')
//     .pipe(gulp.dest('dist'));
// });

// // gulp.task('js-compile-min', function() {
// //   return gulp.src('src/js/finest-form.js')
// //   .pipe(rename('finest-form.min.js'))
// //   .pipe(uglify())
// //   .pipe(gulp.dest('dist'));
// // });


const gulp = require('gulp');
// const concat = require('gulp-concat');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
// const sourcemaps = require('gulp-sourcemaps');
// const babel = require('gulp-babel');


gulp.task('default', ['compile-js', 'compile-sass']);


// ============================================================================
// Funzione di compilazione dei file js
// ----------------------------------------------------------------------------
// Prendo tutti i files .js dalle relative cartelle
// inizializzo la sourcemap
// Faccio il transpile del codice per la compatibilità (babel)
// Esporto la versione concatenata non compressa
// Passo il file concatenato alla compressione (uglify)
// Rinomino il file (.min), scrivo la sourcemap ed esporto la vers. compressa
// ============================================================================
gulp.task('compile-js', function () {
  return gulp
    .src('src/js/finest-form.js')
    .pipe(gulp.dest('dist'))
    .pipe(uglify())
    .on('error', function (err) {
      console.error(err.toString());
    })
    .pipe(rename('finest-form.min.js'))
    .pipe(gulp.dest('dist'));
});


// ============================================================================
// Funzione di compilazione dei file sass
// ----------------------------------------------------------------------------
// Prendo tutti i files .sass partendo dal file con gli @import
// inizializzo la sourcemap
// Compilo sass in versione leggibile
// Esporto la versione concatenata non compressa
// Passo il file concatenato alla compressione (compressed)
// Rinomino il file (.min), scrivo la sourcemap ed esporto la vers. compressa
// ============================================================================
gulp.task('compile-sass', function () {
  return gulp
    .src('src/scss/finest-form.scss')
    // .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist'))
    .pipe(sass({
      outputStyle: 'compressed'
    }).on('error', sass.logError))
    .pipe(rename('finest-form.min.css'))
    // .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('dist'));
});
