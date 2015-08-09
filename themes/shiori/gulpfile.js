// gulpfile.js based on Google Web Starter Kit:
// https://github.com/google/web-starter-kit/blob/master/gulpfile.js
var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var del = require('del');
var dest = 'static/';

var AUTOPREFIXER_BROWSERS = [
  'ie >= 10',
  'ie_mob >= 10',
  'ff >= 30',
  'chrome >= 34',
  'safari >= 7',
  'opera >= 23',
  'ios >= 7',
  'android >= 4.4',
  'bb >= 10'
];

gulp.task('sass', function() {
  return gulp.src([
    'static_src/stylesheets/*.scss'
  ])
    .pipe($.changed('static/stylesheets'))
    .pipe($.sass({
      precision: 10,
      includePaths: ['static_src/_sass', 'bower_components'],
      onError: console.error.bind(console, 'Sass error:')
    }))
    .pipe($.autoprefixer({browsers: AUTOPREFIXER_BROWSERS}))
    .pipe($.csso())
    .pipe(gulp.dest('static/stylesheets'))
    .pipe($.size({title: 'styles'}));
});

gulp.task('js', function() {
  return gulp.src([
    'bower_components/jquery/dist/jquery.min.js',
    'bower_components/bootstrap-sass/assets/javascripts/bootstrap.min.js'
  ])
    .pipe($.changed('static/javascripts'))
    .pipe($.concat('shiori.js'))
    .pipe(gulp.dest('static/javascripts'))
    .pipe($.size({title: 'javascripts'}));
});

gulp.task('clean', del.bind(null, ['static/stylesheets/*', 'static/javascripts/*'], {dot: true, force: true}));

gulp.task('watch', function () {
  gulp.watch(['static_src/**/*.{scss,css}'],
    ['sass']);
});

gulp.task('build', ['clean','sass', 'js']);
gulp.task('default', ['build', 'watch']);
