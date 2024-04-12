var gulp = require('gulp');
var del = require('del');
var flatten = require('gulp-flatten');

//Set this to the location of your public ignite ui repo.
var publicIgRoot = 'C:/Users/gmurray/Documents/GitHub/ignite-ui/src'
//Set this to the output folder of your translator build.
var translatorRoot = 'C:/work/NetAdvantage/DEV/XPlatform/2018.1/Source/Translator/bin/build';
//Set this to the location of your XPlatform source.
var sourceRoot = 'C:/work/NetAdvantage/DEV/XPlatform/2018.1/Source';


gulp.task('clean', function() {
    return del("scripts");
});

gulp.task('default', ['clean'], function() {
    gulp.src([
        publicIgRoot + '/**/*.*'        
    ])
    .pipe(gulp.dest("scripts"));

    gulp.src([
        translatorRoot + '/*.js'
    ])
    .pipe(gulp.dest("scripts/js/modules"));

    gulp.src([
        sourceRoot + '/jQuery/ClientUI/**/*.*'
    ])
    .pipe(gulp.dest("scripts"));

    gulp.src([
        sourceRoot + '/*.JS/**/*.js',
        '!/**/*.template.js',
        '!/**/jquery-ui.js',
        '!/**/jquery-1.9.1.js'
    ])
    .pipe(flatten())
    .pipe(gulp.dest("scripts/js/modules"));
});