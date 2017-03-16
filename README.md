#gulp-open
[![Build Status](https://travis-ci.org/stevelacy/gulp-open.png?branch=master)](https://travis-ci.org/stevelacy/gulp-open)
[![NPM version](https://badge.fury.io/js/gulp-open.png)](http://badge.fury.io/js/gulp-open)

## Information

<table>
<tr>
<td>Package</td><td>gulp-open</td>
</tr>
<tr>
<td>Description</td>
<td>Open files and URLs with gulp</td>
</tr>
<tr>
<td>Node Version</td>
<td>>= 0.9</td>
</tr>
<tr>
<td>Gulp Version</td>
<td>3.x</td>
</tr>
</table>

## Usage
#### Install
    npm install gulp-open --save

## Example

```javascript
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
Contact GitHub API Training Shop Blog About
© 2017 GitHub, Inc. Terms Privacy Security Status Help

```
####You can view more examples in the [example folder.](https://github.com/stevelacy/gulp-open/tree/master/examples)


##Options
`Object, {app, uri}`

`.pipe(open(options))`

###Options.app
`String, local application`

NOTE: If the ``options.app`` is not defined, the Default application will be used for the filetype/URL.

```javascript

'google-chrome' // Linux
'chrome' // Windows
'google chrome' or 'Google Chrome' // OSX
'firefox'

// Example:

.pipe(open({uri: 'file:///etc/resolv.conf', app: 'google-chrome'}));

```

####Note for OSX-Users:
You might have to use an absolute path.

```javascript
var options = {
  uri: 'localhost:3000',
  app: '/Applications/Google\ Chrome.app'
};
gulp.src('./')
  .pipe(open(options));
```

###Options.uri
`String, any valid uri (url, file protocol, or full path)`

####Note for windows users:
URLs may not have a default application. If the task is running without opening in a browser try setting the options.app.
Google Chrome: "chrome"
Firefox: "firefox"

```javascript

'http://localhost:3000'

// Example:
gulp.src('')
.pipe(open({app: 'google-chrome', uri: 'http://localhost:3000'}));
```
