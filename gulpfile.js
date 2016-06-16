const gulp = require('gulp');

const CSS_LIB = [
  'bower_components/normalize-css/normalize.css',
  'bower_components/primer-css/css/primer.css'
];

const JS_LIB = [
  'bower_components/react/react.min.js',
  'bower_components/react/react-dom.min.js',
  'bower_components/jquery/dist/jquery.min.js'
];

gulp.task('css', () => {
  gulp.src(CSS_LIB)
    .pipe(gulp.dest('public/css'));
});

gulp.task('js', () => {
  gulp.src(JS_LIB)
    .pipe(gulp.dest('public/js'));
});

gulp.task('build', () => {
  gulp.start('js', 'css');
});
