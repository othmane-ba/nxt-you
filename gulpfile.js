//pull in our external libraries (npm-packages)
const gulp = require('gulp');
const concat = require('gulp-concat');

const php = require('gulp-connect-php');
const browserSync = require('browser-sync').create();

//help create appropriate paths to our bundles
const useref = require('gulp-useref');
const gulpIf = require('gulp-if');
const cssnano = require('gulp-cssnano');


//one task at a time
//chained order
//GOTCHA: tasks on top cannot reference tasks on bottom

gulp.task('php', function () {
    php.server({base: './', port: 8010, keepalive: true});
});

// injecting a previous task called php
// also creating a 'homebase' or main index is in root following
// classic XAMPP structure
gulp.task('browserSync', gulp.series('php'), function () {
    browserSync.init({
        proxy: "localhost:8010",
        baseDir: "./",
        open: true,
        notify: true

    });
});

gulp.task('dev', gulp.series('browserSync'), function () {
    gulp.watch('./*.php', browserSync.reload);
    gulp.watch('assets/css/**/*.css', gulp.series('pack-css'));
});

//make all stylesheets into one
gulp.task('pack-css', function () {
    return gulp.src(['assets/css/main.css', 'assets/css/custom.css'])
        .pipe(concat('stylesheet.css'))
        .pipe(gulp.dest('public/build/css'));
});

gulp.task('pack-js', function () {
    return gulp.src(['assets/js/vendor/*.js', 'assets/js/main.js', 'assets/js/module*.js'])
        .pipe(concat('stylesheet.css'))
        .pipe(gulp.dest('public/build/css'));
});


gulp.task('useref', function () {
    return gulp.src('/*.html')
        .pipe(useref())
        // Minifies only if it's a CSS file
        .pipe(gulpIf('*.css', cssnano()))
        .pipe(gulp.dest('/'))
});


gulp.task('watch', function () {
    //gulp.watch('assets/js/**/*.js', ['pack-js']);
    gulp.watch('assets/css/**/*.css', gulp.series('pack-css'));
});


//FOR migration from gulp 3 to gulp 4 this is the easiest fix!
//gulp.task('default', ['sass', 'js', 'watch']);
//gulp.watch('app/scss/*.scss', ['sass']);

gulp.task('default', gulp.series('pack-css'));
gulp.watch('assets/css/**/*.css', gulp.series('pack-css', 'pack-js'));
