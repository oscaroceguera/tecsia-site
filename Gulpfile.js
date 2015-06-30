var browserify = require('browserify')
var concat = require('gulp-concat-css')
var gulp = require('gulp')
var jade = require('gulp-jade')
var minifyCSS = require('gulp-minify-css')
var minifyHTML = require('gulp-minify-html')
var nib = require('nib') 
var stripDebug = require('gulp-strip-debug')
var stylus = require('gulp-stylus')
var uglify = require('gulp-uglify')
var watch = require('gulp-watch')
var buffer = require('vinyl-buffer')
var source = require('vinyl-source-stream')

// Necesarios para watch
var path = {}
var jadeTask = ['templates']
var stylusTask = ['styl']
var fontsTask = ['fonts']
var jsTask = ['js']
var viewsTask = ['templatesViews']
var pdfTask = ['pdf']

// Necesarios para watch
path.watch = {
	jade : ['./lib/*.jade'],
	stylus :['./lib/stylus/app.styl'] ,
	fonts : ['./lib/iconfonts/**'],
	js : ['./lib/js/main.js'],
	jadeviews : ['./lib/views/*/*.jade'],
	pdf : ['./lib/pdf/*.pdf']
}


// Necesarios para watch
gulp.task('watch', function(){
	gulp.watch(path.watch.jade, jadeTask);
	gulp.watch(path.watch.stylus, stylusTask);
	gulp.watch(path.watch.fonts, fontsTask);
	gulp.watch(path.watch.jadeviews, viewsTask);
	gulp.watch(path.watch.pdf, pdfTask);
})

//JS
gulp.task('js', function(){
	return browserify({
		entries : './lib/js/main.js'
	})
	.bundle()
	.pipe(source('main.js'))
	.pipe(buffer())
	.pipe(uglify())
	.pipe(gulp.dest('./public/js'))
});

// jade
gulp.task('templates', function(){
	return gulp.src('./lib/*.jade') // Punto de entrada
		.pipe(jade())
		.pipe(minifyHTML())
		.pipe(gulp.dest('./')) // Ubicacion del destino del archivo
})

// Template Views
gulp.task('templatesViews', function(){
	return gulp.src('./lib/views/*/*.jade') // Punto de entrada
		.pipe(jade())
		.pipe(minifyHTML())
		.pipe(gulp.dest('./public/views')) // Ubicacion del destino del archivo
})

// Stylus general
gulp.task('styl', function(){
	return gulp.src('./lib/stylus/app.styl') // Punto de entrada
		.pipe(stylus({use: nib()})) // stylus con nib
		.pipe(concat('app.css'))
		.pipe(minifyCSS())
		.pipe(gulp.dest('./public/css'))
})


// Fonts
gulp.task('fonts', function(){
	return gulp.src('./lib/iconfonts/**')
		.pipe(gulp.dest('./public/iconfonts'))
})

// PDF
gulp.task('pdf', function(){
	return gulp.src('./lib/pdf/**.pdf')
		.pipe(gulp.dest('./public/pdf'))
})

gulp.task('tmp', ['templates','templatesViews','watch'])
gulp.task('default', ['templates','styl', 'templatesViews','fonts','js','pdf'])




