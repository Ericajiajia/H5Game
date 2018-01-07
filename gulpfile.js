var gulp = require( 'gulp' );
var imagemin = require('gulp-imagemin')
var fontSpider = require( 'gulp-font-spider' )

gulp.task('fontspider', function() {
  return gulp.src('./index.html')
    .pipe(fontSpider());
});

gulp.task('img', function() {
  return gulp.src('./static/image/*')
    .pipe(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))
    .pipe(gulp.dest('./static/picture'))
});

gulp.task('default', ['fontspider', 'img']);