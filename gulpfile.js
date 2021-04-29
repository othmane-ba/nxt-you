require('dotenv').config()

const gulp = require('gulp');
const del = require('del');
const connect = require('gulp-connect-php');
const browserSync = require('browser-sync').create();
const sourcemaps = require('gulp-sourcemaps');
const plumber = require('gulp-plumber');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const minifyCss = require('gulp-clean-css');
const dependents = require('gulp-dependents');
const webpack = require('webpack');
const webpackStream = require('webpack-stream');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

const {NODE_ENV, HOST, PORT} = process.env

const isDev = NODE_ENV !== 'production';

const config = require(`./webpack.config${isDev ? '' : '.prod'}.js`);

const SRC = "./src"
const DIST = "./dist"

const paths = {
    html: `${SRC}/**/*.html`,
    scss: `${SRC}/scss/app.scss`,
    js: `${SRC}/js/**/index.js`,
    php: `${SRC}/php/**/*.php`,
    images: `${SRC}/images/**/*.+(png|jpg|jpeg|gif|svg|ico)`,
    static: `${SRC}/static/**/*`,
};


gulp.task('clear', () => del([DIST]));


gulp.task('html', () => {
    return gulp.src([paths.html])
        .pipe(gulp.dest(DIST))
        .pipe(browserSync.stream());
});


gulp.task('scss', () => {
    return gulp.src([
        paths.scss
    ])
        .pipe(sourcemaps.init())
        .pipe(plumber())
        .pipe(dependents())
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(minifyCss())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(`${DIST}/css`))
        .pipe(browserSync.stream());
});


gulp.task('js', () => {
    return gulp.src([paths.js])
        .pipe(webpackStream(config))
        .pipe(gulp.dest(`${DIST}/js`))
});

gulp.task('php', () => {
    return gulp.src([paths.php])
        .pipe(gulp.dest(`${DIST}/api`))
        .pipe(browserSync.stream());
});

gulp.task('images', () => {
    return gulp.src([paths.images])
        .pipe(plumber())
        .pipe(imagemin())
        .pipe(gulp.dest(`${DIST}/images`))
        .pipe(browserSync.stream());
});


gulp.task('static', () => {
    return gulp.src([paths.static])
        .pipe(gulp.dest(`${DIST}/`))
        .pipe(browserSync.stream());
});


gulp.task('build', gulp.series('clear', 'html', 'scss', 'js', 'php', 'images', 'static'));

gulp.task('dev', gulp.series('html', 'scss', 'js', 'php', 'images', 'static'));


gulp.task('connect', function () {
    connect.server({base: DIST, port: PORT, keepalive: true});
});


gulp.task('serve', gulp.series('connect'), () => {
    return browserSync.init({
        proxy: `${HOST}:${PORT}`,
        injectChanges: true,
        notify: false,
        files: [`${DIST}/**/*`]
    });
});


gulp.task('watch', () => {
    gulp.watch(`${SRC}/**/*.scss`, gulp.series('scss'));
    gulp.watch(`${SRC}/**/*.js`, gulp.series("js"));
    gulp.watch(paths.html, gulp.series("html"));
    gulp.watch(paths.php, gulp.series("php"));
    gulp.watch(paths.images, gulp.series("images"));
    gulp.watch(paths.static, gulp.series("static"));
});


gulp.task('default', gulp.series('build', gulp.parallel('serve', 'watch')));
