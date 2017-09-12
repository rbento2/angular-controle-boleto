'use strict';

const gulp = require('gulp'),
    destination = require('./destination'),
    runSequence = require('run-sequence');

// Task to build dev environment
gulp.task('build:dev', (done) => {
    _executeSequence(done, 'dev');
});

// Task to build hmg environment
gulp.task('build:hmg', (done) => {
    _executeSequence(done, 'hmg');
});

// Task to build hmg client environment
gulp.task('build:hmgInterno', (done) => {
    _executeSequence(done, 'hmgInterno');
});

// Task to build production environment
gulp.task('build:prod', (done) => {
    _executeSequence(done, 'prod');
});

// function to execute runSequence
function _executeSequence(done, environment) {
    global.pathDestination = destination(environment);

    return runSequence(
        'clean',
        'lint',
        'styles:bundles',
        'styles:vendors',
        'scripts:bundles',
        'scripts:vendors',
        ['fonts', 'images', 'svgs', 'pdfs', 'html'],
        'transfer-webconfig',
        'clean:js',
        done
    );
};
