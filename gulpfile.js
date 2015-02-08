var gulp = require('gulp');

//include plugins
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var minifyHtml = require('gulp-minify-html');
var minifyCss = require('gulp-minify-css');
var imagemin = require('gulp-imagemin');

// Lint Task
gulp.task('lint', function() {
    return gulp.src('js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});
// Concatenate & Minify JS
gulp.task('scripts', function() {
    return gulp.src('js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('js'));
});
// Minify HTML
gulp.task('minify-html', function () {
    gulp.src('./*.html')
    .pipe(minifyHtml())
    .pipe(gulp.dest('.'));
});
// Minify CSS
gulp.task('minify-css', function () {
    gulp.src('css/*.css') // path to your file
    .pipe(minifyCss())
    .pipe(gulp.dest('css'));
});
// compress images
gulp.task('imagemin', function () {
    gulp.src('img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('img'));
})
// Default Task
gulp.task('default', ['lint', 'scripts', 'minify-html', 'minify-css', 'imagemin']);