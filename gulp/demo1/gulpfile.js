var gulp = require('gulp');

var cssmin = require('gulp-cssmin'),//压缩css文件
	rename = require('gulp-rename'),//重命名
	clean = require('gulp-clean'),//清空文件夹
	concat = require('gulp-concat'),//合并文件
	minhtml = require('gulp-htmlmin');//html压缩
	jshint = require('gulp-jshint'),//js代码规范性检查
	imagemin = require('gulp-imagemin'),
	uglify = require('gulp-uglify');

gulp.task('css',function(){
	gulp.src('src/css/*.css')
		.pipe(concat('merge.css'))
		.pipe(cssmin())
		.pipe(rename({suffix:'.min'}))
		.pipe(gulp.dest('dist/css/'))
})

gulp.task('clear',function(){
	gulp.src('dist/*',{read:false})
		.pipe(clean());
})

gulp.task('html',function(){
	gulp.src('src/*.html')
		.pipe(minhtml({collapseWhitespace:true}))
		.pipe(gulp.dest('dist'));
})

gulp.task('img',function(){
	gulp.src('src/imgs/*')
		.pipe(imagemin())
		.pipe(gulp.dest('dist/imgs'))
})

gulp.task('js',function(){
	gulp.src('src/js/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter('default'))
		.pipe(concat('merge.js'))
		.pipe(rename({suffix:'.min'}))
		.pipe(uglify())
		.pipe(gulp.dest('dist/js/'))
})

gulp.task('build',['img','js','css','html'])