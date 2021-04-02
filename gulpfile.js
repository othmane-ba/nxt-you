require('dotenv').config()

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
const webpack = require('webpack');
const webpackStream = require('webpack-stream');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

const {NODE_ENV, HOST, PORT} = process.env

const isDev = NODE_ENV !== 'production';

const config = require(`./webpack.config${NODE_ENV === "production" ? '.prod' : ''}.js`);

const SRC = "./src"
const DIST = "./dist"

const paths = {
    html: `${SRC}/**/*.html`,
    scss: `${SRC}/assets/scss/app.scss`,
    js: `${SRC}/assets/js/index.js`,
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
        .pipe(webpackStream(config), webpack)
        .pipe(uglify())
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
    php.server({base: DIST, port: PORT, keepalive: true});
});


gulp.task('serve', gulp.series('php'), () => {
    return browserSync.init({
        proxy: `${HOST}:${PORT}`,
        baseDir: "./",
        open: true,
        notify: true
    });
});


gulp.task('watch', () => {
    return gulp.watch("**/*", {
            ignored: [
                `${DIST}/**/*`
            ]
        },
    ).on('change', browserSync.reload);
});


gulp.task('default', gulp.series('build', gulp.parallel('serve', 'watch')));
