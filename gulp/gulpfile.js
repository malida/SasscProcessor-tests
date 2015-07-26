
var gulp = require('gulp')
var uglify = require('gulp-uglify')
var coffee = require('gulp-coffee')

var minify_css = require('gulp-minify-css')
var sass = require('gulp-sass')

var concat = require('gulp-concat')
var sourcemaps = require('gulp-sourcemaps')

gulp.task('js', function () {
  gulp.src('source/js/**/*.coffee')
    .pipe(sourcemaps.init())
      .pipe(coffee())
      .pipe(concat('application.js'))
      .pipe(uglify())
    .pipe(sourcemaps.write('../maps'))
    .pipe(gulp.dest('build/js'));
});


gulp.task('css', function () {
  gulp.src('source/css/**/*.scss')
    .pipe(sourcemaps.init())
      .pipe(sass())
      .pipe(minify_css())
      .pipe(concat('application.css'))
    .pipe(sourcemaps.write('../maps'))
    .pipe(gulp.dest('build/css'));
})


gulp.task('default', ['js', 'css']);
