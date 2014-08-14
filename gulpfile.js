var gulp = require('gulp');
var livereload = require('gulp-livereload');
var connect = require('gulp-connect');
var uglify = require('gulp-uglify');
var minifyCSS = require('gulp-minify-css');
var clean = require('gulp-clean');
var open = require('gulp-open');

// Watch
gulp.task('watch', function() {
	livereload.listen();
	gulp.watch('./*.html').on('change', livereload.changed);
	gulp.watch('assets/css/*.css').on('change', livereload.changed);
});

// Build
gulp.task('clean', function() {
	gulp.src('./dist/*')
		.pipe(clean({force: true}));
});
gulp.task('minify-css', function() {
	var opts = {comments: true, spare: true};
	gulp.src(['./assets/css/**/*.cs, ./assets/css/*.cs'])
		.pipe(minifyCSS(opts))
		.pipe(gulp.dest('./dist/'));
});
gulp.task('copy-bower-components', function() {
	gulp.src(['./bower_components/**'])
		.pipe(gulp.dest('dist/bower_components'));
});
gulp.task('copy-html-files', function() {
	gulp.src(['./*.html'])
		.pipe(gulp.dest('dist/'));
});

// Open + Connect
gulp.task('connect', function() {
	connect.server({
		root: [__dirname],
		port: 8080
	});
});
gulp.task('connect-dist', function () {
	connect.server({
		root: 'dist/',
		port: 9000
	});
});
gulp.task('open', function() {
	var options = {
		url: 'http://localhost:8080'
	};
	gulp.src('./index.html')
		.pipe(open('', options));
});

gulp.task('default', ['connect', 'watch', 'open']);
gulp.task('build', ['clean', 'minify-css', 'copy-bower-componenets', 'copy-html-files', 'connect-dist']);