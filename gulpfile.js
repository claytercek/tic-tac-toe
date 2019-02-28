var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var browserSync = require('browser-sync').create();
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');
var del = require('del');
const { series, parallel } = require('gulp');

gulp.task('js', function(cb) {
  gulp.src('src/js/**/*.js')
		.pipe(concat('script.js'))
    .pipe(uglify())
		.pipe(gulp.dest('dist/js'))
		.pipe(browserSync.reload({
      stream: true
    }))
  cb();
})

gulp.task('sass', function(cb) {
  gulp.src('src/scss/**/*.scss')
		.pipe(sass())
		// .pipe(concat('main.css'))
		.pipe(gulp.dest('dist/css'))
		.pipe(browserSync.reload({
      stream: true
    }))
  cb();
})


gulp.task('images', function(cb){
  gulp.src('src/images/**/*.+(png|jpg|gif|svg)')
  .pipe(cache(imagemin()))
  .pipe(gulp.dest('dist/images'))
  cb();
});

gulp.task('clean', function(cb) {
	del.sync('dist');
	cb();
})

gulp.task('browserSync', function(cb) {
  browserSync.init({
    server: {
      baseDir: './'
    }
  })
  cb();
})


gulp.task('watch', gulp.series('clean', gulp.parallel('sass', 'browserSync', 'js', 'images'), function (){
  gulp.watch('src/scss/**/*.scss', gulp.series('sass')); 
  gulp.watch('src/js/**/*.js', gulp.series('js')); 
  gulp.watch('src/images/**/*.+(png|jpg|gif|svg)', gulp.series('images')); 
  gulp.watch("*.html").on('change', browserSync.reload);
}));

gulp.task('build', gulp.series( 'clean', 'sass', 'js', 'images'));

gulp.task('default', gulp.series('build'))