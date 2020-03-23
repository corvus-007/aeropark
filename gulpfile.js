/* global require */

const { task, src, dest, watch, series, parallel } = require('gulp');

const plumber = require('gulp-plumber');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const babel = require('gulp-babel');
const webpack = require('webpack');
const webpackStream = require('webpack-stream');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const fileinclude = require('gulp-file-include');
const include = require('gulp-include');
const svgstore = require('gulp-svgstore');
const browserSync = require('browser-sync').create();
const autoprefixer = require('autoprefixer');
const del = require('del');
const ghPages = require('gulp-gh-pages');

const folder = {
  src: './app',
  build: './public/build',
};
const isDevelopment =
  !process.env.NODE_ENV || process.env.NODE_ENV == 'development';
const webpackConfig = require('./webpack.config');

console.log({ isDevelopment });

task('styles', () => {
  return src([
    `${folder.src}/scss/style.scss`,
    `${folder.src}/scss/aeroplan-style.scss`,
  ])
    .pipe(sass())
    .pipe(postcss([autoprefixer()]))
    .pipe(dest(`${folder.build}/`))
    .pipe(browserSync.stream());
});

function stylesProduction(cb) {
  return (
    src(
      [
        `${folder.src}/scss/style.scss`,
        `${folder.src}/scss/aeroplan-style.scss`,
      ],
      {
        sourcemaps: true,
      }
    )
      .pipe(
        plumber({
          errorHandler: function(err) {
            console.log(err);
          },
        })
      )
      .pipe(sass())
      .pipe(postcss([autoprefixer(), cssnano]))
      .pipe(dest(`${folder.build}/`))
      // .pipe(
      //   rename({
      //     suffix: '.min',
      //   })
      // )
      // .pipe(
      //   dest(`${folder.build}/`, {
      //     sourcemaps: '.',
      //   })
      // )
      .pipe(browserSync.stream())
  );

  cb();
}

function pluginsJSDev(cb) {
  src([`${folder.src}/js/plugins.js`])
    .pipe(include())
    .pipe(dest(`${folder.build}/js`))
    .pipe(browserSync.stream());

  cb();
}

function pluginsJSProduction(cb) {
  src([`${folder.src}/js/plugins.js`])
    .pipe(include())
    .pipe(uglify())
    .pipe(dest(`${folder.build}/js`))
    .pipe(browserSync.stream());

  cb();
}

task('aeroplan-scripts', () => {
  return src(`${folder.src}/js/aeroplan/aeroplan-app.js`)
    .pipe(
      babel({
        presets: ['@babel/env'],
      })
    )
    .pipe(webpackStream(webpackConfig, webpack))
    .pipe(dest(`${folder.build}/js`))
    .pipe(browserSync.stream());
});

function modulesJS(cb) {
  return src(`${folder.src}/js/modules.js`)
    .pipe(include())
    .pipe(
      babel({
        presets: ['@babel/env'],
      })
    )
    .pipe(dest(`${folder.build}/js`))
    .pipe(browserSync.stream());

  cb();
}

function copyJS(cb) {
  return src([`${folder.src}/js/script.js`])
    .pipe(include())
    .pipe(
      babel({
        presets: ['@babel/env'],
      })
    )
    .pipe(dest(`${folder.build}/js`))
    .pipe(browserSync.stream());

  cb();
}

function copyJSOrigin() {
  return src([`${folder.src}/js/jquery.min.js`, `${folder.src}/js/*.{json}`])
    .pipe(include())
    .pipe(dest(`${folder.build}/js`))
    .pipe(browserSync.stream());

  cb();
}

function includeHtml(cb) {
  return src(`${folder.src}/*.html`)
    .pipe(
      fileinclude({
        indent: true,
      })
    )
    .pipe(dest(`${folder.build}/`));

  cb();
}

function copyImages(cb) {
  return src([
    `${folder.src}/images/**/*`,
    `!${folder.src}/images/svg-symbols`,
  ]).pipe(dest(`${folder.build}/images`));

  cb();
}

function makeSymbols(cb) {
  return src(`${folder.src}/images/svg-symbols/**/*.svg`)
    .pipe(svgstore())
    .pipe(rename('symbols.svg'))
    .pipe(dest(`${folder.build}/images`));

  cb();
}

function copyFonts(cb) {
  return src(`${folder.src}/fonts/**/*.{woff,woff2}`).pipe(
    dest(`${folder.build}/fonts`)
  );

  cb();
}

function clean(cb) {
  return del(`${folder.build}`);

  cb();
}

function serve(cb) {
  browserSync.init({
    server: folder.build,
  });

  watch(`${folder.src}/scss/**/*`, series('styles'));
  watch(`${folder.src}/fonts/**/*`, copyFonts);
  watch(`${folder.src}/images/**/*`, copyImages);
  watch(
    [`${folder.src}/blocks/**/*.html`, `${folder.src}/*.html`],
    includeHtml
  ).on('change', browserSync.reload);
  watch(`${folder.src}/images/svg-symbols/**/*`, makeSymbols);
  watch(
    [`${folder.src}/js/plugins/*.js`, `${folder.src}/js/plugins.js`],
    pluginsJSDev
  );
  watch('./app/js/aeroplan/**/*.js', series('aeroplan-scripts'));
  watch(
    [`${folder.src}/js/modules/*.js`, `${folder.src}/js/modules.js`],
    modulesJS
  );
  watch([`${folder.src}/js/script.js`], copyJS);
  watch(
    [`${folder.src}/js/jquery.min.js`, `${folder.src}/js/*.{json}`],
    copyJSOrigin
  );

  cb();
}

function deployProject(cb) {
  return src(`${folder.build}/**/*`).pipe(ghPages());

  cb();
}

const buildDev = series(
  clean,
  parallel(
    'styles',
    copyImages,
    copyJS,
    copyJSOrigin,
    modulesJS,
    pluginsJSDev,
    'aeroplan-scripts',
    copyFonts,
    includeHtml,
    makeSymbols
  )
);

const buildProduction = series(
  clean,
  parallel(
    stylesProduction,
    copyImages,
    copyJS,
    copyJSOrigin,
    modulesJS,
    pluginsJSProduction,
    'aeroplan-scripts',
    copyFonts,
    includeHtml,
    makeSymbols
  )
);

const build = isDevelopment ? buildDev : buildProduction;

exports.build = build;
exports.serve = series(serve);
exports.deploy = deployProject;
