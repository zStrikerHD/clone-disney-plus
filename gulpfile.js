const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imageMin = require('gulp-imagemin');

function styles() {
    return gulp.src('./src/styles/*.scss')
        .pipe(sass({ style: 'compressed'}))
        .pipe(gulp.dest('./dist/css'));
}
function images() {
    return gulp.src('./src/images/**/*')
        .pipe(imageMin())
        .pipe(gulp.dest('./dist/images'));
}

exports.default = gulp.parallel(styles, images);
exports.watch = function() {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles));
    gulp.watch('./src/images/**/*', gulp.parallel(images));
}