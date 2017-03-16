'use strict';

var os = require('os');
var gulp = require('gulp');
var open = require('gulp-open');
var webserver = require('gulp-webserver');
var serve = require('gulp-serve');
// Default usage:
// Open one file with default application

gulp.task('open', function(){
  gulp.src('./index.html')
  .pipe(open());
});


var browser = os.platform() === 'linux' ? 'google-chrome' : (
  os.platform() === 'darwin' ? 'google chrome' : (
  os.platform() === 'win32' ? 'firefox' : 'firefox'));

gulp.task('browser', function(cb){
  // gulp.src('./*.html')
  // .pipe(open({app: browser}, cb));
});
// Simple usage, no options.
// This will use the uri in the default browser

gulp.task('uri', function(){
  // gulp.src('')
  // .pipe(open({uri:'http://www.google.com'}));
});

// Open an URL in a given browser:

gulp.task('app', function(){
  // var options = {
  //   uri: 'localhost:3000',
  //   app: 'firefox'
  // };
  // gulp.src('./index.html')
  // .pipe(open(options));
});

// Run the task with gulp

/* Webserver task:
Firstly runs the resources task - which serves the UI5 library files via a separate server.
and then creates a webserver that serves the application, and opens it in a browser */
gulp.task('webserver', function() {
  gulp.src('app')
    .pipe(webserver({
      livereload: true,
      directoryListing: true,
      open: true
    }));
 });


gulp.task('serve', serve('public'));
gulp.task('serve-build', serve(['public', 'build']));
gulp.task('serve-prod', serve({
  root: ['public', 'build'],
  port: 443,
  middleware: function(req, res) {
    // custom optional middleware 
  }
}));

gulp.task('default', ['open', 'uri', 'app', 'browser','webserver']);
