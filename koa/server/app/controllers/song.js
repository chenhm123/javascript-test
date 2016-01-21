/**
 * Created by Administrator on 2016/1/14.
 */
var fs = require('fs');
var p = require('path');

module.exports = {
    read:function *(next){
        var files = fs.readdirSync(p.join(__dirname,'../../static/uploaded'));

        var data = files.map(function(file){
            return {
                name:p.basename(file),
                path:'/uploaded'+ file
            }
        });
        yield this.render('read.hbs',{files:data})
        yield next;
    },
    create:function *(next){
        yield this.render('create.hbs');
        yield next;
    },
    doCreate:function *(next){
        var file = this.request.body.files;
        try{
            rename(file.file.path,file.file.name);
        }catch(expection){
            console.log(expection);
            this.body = '上传错误';
            return yield next;
        }
        this.body = '上传成功'
        yield next;
    },
    update:function *(next){
        var name = this.request.query.name;
        yield  this.render('update.hbs',{
            old:name
        });
        yield next;
    },
    doUpdate:function *(next){
        var files = this.request.body.files;
        var old = this.request.body.old;
        try{
            fs.unlinkSync(p.join(__dirname,'../../static/uploaded',name));
        }catch(expection){
            console.log(expection);
            this.body = {errorCode:3};
            return yield next;
        }
        this.body = {errorCode:0};
        yield next;
    }
}
function rename(oldPath,newName){
    return fs.renameSync(oldPath,p.join(p.dirname(oldPath),newName));
}
