var concat = require('gulp-concat-css')
var gulp = require('gulp')
var jade = require('gulp-jade')
var minifyCSS = require('gulp-minify-css')
var minifyHTML = require('gulp-minify-html')
var nib = require('nib') 
var stylus = require('gulp-stylus')
var watch = require('gulp-watch')

// Necesarios para watch
var path = {}
var jadeTask = ['templates']
var stylusTask = ['styl']
var fontsTask = ['fonts']

// Necesarios para watch
path.watch = {
	jade : ['./lib/*.jade'],
	stylus :['./lib/stylus/app.styl'] ,
	fonts : ['./lib/iconfonts/**']
}

// Necesarios para watch
gulp.task('watch', function(){
	gulp.watch(path.watch.jade, jadeTask);
	gulp.watch(path.watch.stylus, stylusTask);
	gulp.watch(path.watch.fonts, fontsTask);
})


// jade
gulp.task('templates', function(){
	return gulp.src('./lib/*.jade') // Punto de entrada
		.pipe(jade())
		.pipe(minifyHTML())
		.pipe(gulp.dest('./public')) // Ubicacion del destino del archivo
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


gulp.task('default', ['templates','styl', 'fonts','watch'])