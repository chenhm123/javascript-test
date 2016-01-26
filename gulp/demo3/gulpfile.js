/**
 * Created by Administrator on 2016/1/26.
 */
var gulp  = require('gulp');
var rev = require('gulp-rev');//��Ӱ汾��
var revReplace = require('gulp-rev-replace');//�汾���滻
var useref = require('gulp-useref');  //����html��Դ��λ
var filter = require('gulp-filter');//��������
var uglify = require('gulp-uglify');//jsѹ��
var csso = require('gulp-csso');//csss�Ż�ѹ��
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
