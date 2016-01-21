/**
 * Created by Administrator on 2016/1/14.
 */
module.exports = {
    index:function *(next){
        yield this.render('index.hbs');
        yield next;
    },
    index2:function *(next){
        yield this.render('index2.hbs');
        yield next;
    },
    data:function *(next){
        var userData = {
            name:'frank',
            age:25
        }
        var userDataString = JSON.stringify(userData);

        var callback = this.query.call2;

        callback = callback.replace(/\(/,'');
        callback = callback.replace(/\)/,'');

        this.body = callback + '(' +userDataString + ')'
    },
    post:function * (next){
        var name = this.request.body.name;
        var phone = this.request.body.phone;

        /*yield this.render('post.hbs',{
            name:name,
            phone:phone
        });*/

        this.body = {
            errorCode:0,
            data:{
                name:name,
                phone:phone
            }
        }

        yield next;
    },
    post2:function *(next){
        var name = this.request.body.name;
        var phone = this.request.body.phone;

        yield this.render('post2.hbs',{
            name2:name,
            phone2:phone
        });
        yield next;
    }
}