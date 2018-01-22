var gulp = require('gulp');
var webpack = require('webpack-stream');
var origin_webpack = require('webpack');
var del = require('del');
var runSequence = require('run-sequence');
var path = require('path');
var shell = require('gulp-shell')

gulp.task('clean',function(){
	del(['./www/js/*.js', './www/js/*.map', './www/css/*.css']);

});

gulp.task('css',function(){
	return gulp.src('./client/src/cad/css/**/*.css')
		.pipe(gulp.dest('./client/dist/css/'))
})


gulp.task('transpile',function(){
  let webpack_config = './webpack.config.js'
	return gulp.src('./src/index.js')
	.pipe(webpack(require(webpack_config), origin_webpack))
	.pipe(gulp.dest('./www/js/'));
})

gulp.task('build',function(callback){
	runSequence('clean',['transpile'],callback)
})

gulp.task('android',shell.task([
  'cordova run android'
]))


