'use strict';

const gulp = require('gulp'),
    config = require('./config');

// Move the Webconfig to dist folder
gulp.task('transfer-webconfig', () => {
    return gulp
        .src(`${config.paths.src}/Web.config`)
        .pipe(gulp.dest(global.pathDestination.path));
});

