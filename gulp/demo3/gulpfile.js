/**
 * Created by Administrator on 2016/1/26.
 */
var gulp  = require('gulp');
var rev = require('gulp-rev');//添加版本号
var revReplace = require('gulp-rev-replace');//版本号替换
var useref = require('gulp-useref');  //解析html资源定位
var filter = require('gulp-filter');//过滤数据
var uglify = require('gulp-uglify');//js压缩
var csso = require('gulp-csso');//csss优化压缩
var clean = require('gulp-clean');

gulp.task('index',['clear'],function(){
    var jsFilter = filter("**/*.js",{restore:true});
    var cssFilter = filter("**/*.css",{restore:true});


    return gulp.src("src/index.html")
        .pipe(useref())
        .pipe(jsFilter)
        .pipe(uglify())
        .pipe(jsFilter.restore)
        .pipe(cssFilter)
        .pipe(csso())
        .pipe(cssFilter.restore)
        .pipe(rev())
        .pipe(useref())
        .pipe(revReplace())
        .pipe(gulp.dest('dist'));
})

gulp.task('clear',function(){
    gulp.src('dist/*',{read:false})
        .pipe(clean());
})
