var gulp = require('gulp');

var CSS_LIB = ['bower_components/normalize.css/normalize.css'];
var JS_LIB = ['bower_components/jquery/dist/jquery.min.js'];

gulp.task('css', function () {
  gulp.src(CSS_LIB)
    .pipe(gulp.dest('public/css'));
});

gulp.task('js', function () {
  gulp.src(JS_LIB)
    .pipe(gulp.dest('public/js'));
});

gulp.task('build', function () {
  gulp.start('js', 'css');
});