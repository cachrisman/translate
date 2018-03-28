var gulp = require('gulp');
var serve = require('gulp-serve');
var inlinesource = require('gulp-inline-source');

gulp.task('default', ['serve', 'bundle']);

// Serve dist folder on port 3000 for local development
gulp.task('serve', serve({
  root: 'dist',
  port: process.env.PORT || 3000
}));

// Inlines all external scripts and stylesheets that have the inline attribute
// Outputs the index.all.html file into the dist folder
// This can be used with the widget srcdoc option to upload all widget code to Contentful
gulp.task('bundle', function() {
  gulp.src('index.html')
    .pipe(inlinesource({compress: false}))
    .pipe(gulp.dest('./dist'));
});
