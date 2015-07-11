/**
 * Gulp Packages
 */

// General
var gulp = require('gulp');
var fs = require('fs');
var del = require('del');
var lazypipe = require('lazypipe');
var plumber = require('gulp-plumber');
var flatten = require('gulp-flatten');
var tap = require('gulp-tap');
var rename = require('gulp-rename');
var header = require('gulp-header');
var footer = require('gulp-footer');
var watch = require('gulp-watch');
var livereload = require('gulp-livereload');
var package = require('./package.json');

// Scripts and tests
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

// Styles
var sass = require('gulp-ruby-sass');
var prefix = require('gulp-autoprefixer');
var minify = require('gulp-minify-css');

// Notify
var notify = require("gulp-notify");

// SVGs
// var svgmin = require('gulp-svgmin');
// var svgstore = require('gulp-svgstore');


/**
 * Paths to project folders
 */
var relPath = "public/"

var paths = {
	input: relPath + 'src/**/*',
	output: relPath + '',
	scripts: {
		input: relPath + 'src/js/*',
		output: relPath + 'js/'
	},
	styles: {
		input: relPath + 'src/sass/**/*.{scss,sass}',
		output: relPath + 'styles/'
	},
	svgs: {
		input: relPath + 'src/svg/*',
		output: relPath + 'svg/'
	},
	static: relPath + 'src/static/**',
};


/**
 * Template for banner to add to file headers
 */

var banner = {
	full :
		'/**\n' +
		' * JUST THE FULL BANNER\n' +
		' */\n\n',
	min :
		'/**' +
		' * JUST THE MIN BANNER\n' +
		' */\n'
};


/**
 * Gulp Taks
 */

// Lint, minify, and concatenate scripts
// gulp.task('build:scripts', ['clean:dist'], function() {
// 	var jsTasks = lazypipe()
// 		.pipe(header, banner.full, { package : package })
// 		.pipe(gulp.dest, paths.scripts.output)
// 		.pipe(rename, { suffix: '.min' })
// 		.pipe(uglify)
// 		.pipe(header, banner.min, { package : package })
// 		.pipe(gulp.dest, paths.scripts.output);

// 	return gulp.src(paths.scripts.input)
// 		.pipe(plumber())
// 		.pipe(tap(function (file, t) {
// 			if ( file.isDirectory() ) {
// 				var name = file.relative + '.js';
// 				return gulp.src(file.path + '/*.js')
// 					.pipe(concat(name))
// 					.pipe(jsTasks());
// 			}
// 		}))
// 		.pipe(jsTasks());
// });

// Process, lint, and minify Sass files
gulp.task('build:styles', ['clean:dist'], function() {
	return gulp.src(paths.styles.input)
		.pipe(plumber())
		.pipe(sass({
			style: 'expanded',
			lineNumbers: true,
			noCache: true,
			'sourcemap=none': true
		}))
		.pipe(flatten())
		.pipe(prefix({
			browsers: ['last 2 version', '> 1%'],
			cascade: true,
			remove: true
		}))
		.pipe(header(banner.full, { package : package }))
		.pipe(gulp.dest(paths.styles.output))
		.pipe(rename({ suffix: '.min' }))
		.pipe(minify())
		.pipe(header(banner.min, { package : package }))
		.pipe(gulp.dest(paths.styles.output))
		.pipe(notify("Scss is done!"));
});

// Generate SVG sprites
// gulp.task('build:svgs', ['clean:dist'], function () {
// 	return gulp.src(paths.svgs.input)
// 		.pipe(plumber())
// 		.pipe(tap(function (file, t) {
// 			if ( file.isDirectory() ) {
// 				var name = file.relative + '.svg';
// 				return gulp.src(file.path + '/*.svg')
// 					.pipe(svgmin())
// 					.pipe(svgstore({
// 						fileName: name,
// 						prefix: 'icon-',
// 						inlineSvg: true
// 					}))
// 					.pipe(gulp.dest(paths.svgs.output));
// 			}
// 		}))
// 		.pipe(svgmin())
// 		.pipe(svgstore({
// 			fileName: 'icons.svg',
// 			prefix: 'icon-',
// 			inlineSvg: true
// 		}))
// 		.pipe(gulp.dest(paths.svgs.output));
// });

// Copy static files into output folder
gulp.task('copy:static', ['clean:dist'], function() {
	return gulp.src(paths.static)
		.pipe(plumber())
		.pipe(gulp.dest(paths.output));
});

// Lint scripts
// gulp.task('lint:scripts', function () {
// 	return gulp.src(paths.scripts.input)
// 		.pipe(plumber())
// 		.pipe(jshint())
// 		.pipe(jshint.reporter('jshint-stylish'));
// });

// Remove prexisting content from output and test folders
gulp.task('clean:dist', function () {
	// del.sync([
	// 	paths.output
	// ]);
});

// Copy distribution files to docs
// gulp.task('copy:dist', ['compile', 'clean:docs'], function() {
// 	return gulp.src(paths.output + '/**')
// 		.pipe(plumber())
// 		.pipe(gulp.dest(paths.docs.output + '/dist'));
// });

// Copy documentation assets to docs
// gulp.task('copy:assets', ['clean:docs'], function() {
// 	return gulp.src(paths.docs.assets)
// 		.pipe(plumber())
// 		.pipe(gulp.dest(paths.docs.output + '/assets'));
// });

// Remove prexisting content from docs folder
// gulp.task('clean:docs', function () {
// 	return del.sync(paths.docs.output);
// });

// Spin up livereload server and listen for file changes
gulp.task('listen', function () {
	// livereload.listen();
	gulp.watch(paths.input).on('change', function(file) {
		gulp.start('default');
		// gulp.start('refresh');
	});
});

// Run livereload after file change
// gulp.task('refresh', ['compile', 'docs'], function () {
// 	livereload.changed();
// });


/**
 * Task Runners
 */

// Compile files
gulp.task('compile', [
	// 'lint:scripts',
	'clean:dist',
	'copy:static',
	// 'build:scripts',
	// 'build:svgs',
	'build:styles'
]);

// Generate documentation
// gulp.task('docs', [
// 	'clean:docs',
// 	'build:docs',
// 	'copy:dist',
// 	'copy:assets'
// ]);

// Compile files, generate docs
gulp.task('default', [
	'compile',
	// 'docs'
]);

// Compile files, generate docs when something changes
gulp.task('watch', [
	'listen',
	'default'
]);