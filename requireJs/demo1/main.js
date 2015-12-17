require.config({
	paths:{
		jquery:jquery
	}
});
require(['jquery'],function($){
	alert($().jquery);
});