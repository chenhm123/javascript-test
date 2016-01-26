var gulp = require('gulp');

var browserSync = require('browser-sync').create();//浏览器自动刷新
var fs = require('fs');

gulp.task('reload',function(){
	browserSync.reload();
})

gulp.task('server',function(){
	browserSync.init({
		server:{
			baseDir:"./src"
		}
	});

	gulp.watch(['**/*.css', '**/*.js', '**/*.html'], ['reload'])
})