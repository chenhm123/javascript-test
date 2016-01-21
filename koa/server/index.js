/**
 * Created by Administrator on 2016/1/14.
 */
var koa = require('koa');
var path = require('path');
var views = require('koa-views');
var serve = require('koa-static');
var bodyParser = require('koa-body');

var app = module.exports = koa();

app.use(views('app/views',{
    map:{hbs:handlebars}
}));

app.use(bodyParser({multipart:true,formidable:{uploadDir:path.join(_dirname,'static/uploaded')}}));

app.use(function * (next){
    console.log('有人访问了:'+this.request.host + this.request.url);
    yield next;
})
app.use(serve('./static'));

require('./app/routes')(app);

if(!module.parent){
    app.listen(3000);
    console.log('http://127.0.0.1:3000')
}
