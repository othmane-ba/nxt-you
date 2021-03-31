const gulp = require('gulp');
const del = require('del');
const php = require('gulp-connect-php');
const browserSync = require('browser-sync').create();
const sourcemaps = require('gulp-sourcemaps');
const plumber = require('gulp-plumber');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const minifyCss = require('gulp-clean-css');
const dependents = require('gulp-dependents');
const babel = require('gulp-babel');
const webpack = require('webpack-stream');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const imagemin = require('gulp-imagemin');

const SRC = "./src"
const DIST = "./dist"

const paths = {
    html: `${SRC}/**/*.html`,
    scss: `${SRC}/assets/scss/app.scss`,
    js: `${SRC}/assets/js/**/*.js`,
    php: `${SRC}/assets/php/**/*.php`,
    images: `${SRC}/assets/images/**/*.+(png|jpg|jpeg|gif|svg|ico)`
};


gulp.task('clear', () => del([DIST]));


gulp.task('html', () => {
    return gulp.src([paths.html], {
        base: SRC,
        since: gulp.lastRun('html')
    })
        .pipe(gulp.dest(DIST))
        .pipe(browserSync.stream());
});


gulp.task('scss', () => {
    return gulp.src([
        paths.scss
    ], {since: gulp.lastRun('scss')})
        .pipe(sourcemaps.init())
        .pipe(plumber())
        .pipe(dependents())
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(minifyCss())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(`${DIST}/css`))
        .pipe(browserSync.stream());
});


gulp.task('js', () => {
    return gulp.src([paths.js], {since: gulp.lastRun('js')})
        .pipe(plumber())
        .pipe(webpack({
            mode: 'production'
        }))
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(concat('all.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(`${DIST}/js`))
        .pipe(browserSync.stream());
});


gulp.task('images', () => {
    return gulp.src([paths.images], {since: gulp.lastRun('images')})
        .pipe(plumber())
        .pipe(imagemin())
        .pipe(gulp.dest(`${DIST}/images`))
        .pipe(browserSync.stream());
});


gulp.task('build', gulp.series('clear', 'html', 'scss', 'js', 'images'));

gulp.task('dev', gulp.series('html', 'scss', 'js'));


gulp.task('php', function () {
    php.server({base: DIST, port: 80, keepalive: true});
});


gulp.task('serve', gulp.series('php'), () => {
    return browserSync.init({
        proxy: "localhost:80",
        baseDir: "./",
        open: true,
        notify: true
    });
});


gulp.task('watch', () => {
    gulp.watch([paths.html, paths.scss, paths.js], gulp.series('dev')).on('change', browserSync.reload);
    gulp.watch([paths.images], gulp.series('images')).on('change', browserSync.reload);
});


gulp.task('default', gulp.series('build', gulp.parallel('serve', 'watch')));
