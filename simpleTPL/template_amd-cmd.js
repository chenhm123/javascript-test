(function(name,definition,context){
	if(typeof module!='undefined' && module.exports)
		{module.exports = definition();}
	else if(typeof context['define']=='function'&&(context['define']['amd']||context['define']['cmd']))
		{define(definition);}
	else{context[name] = definition();}

})('Tpl',function(){
		return function(tpl,data){
			var re = /{{([a-zA-Z$_][a-zA-Z0-9\.]*)}}/g;
			return tpl.replace(re,function(raw,key,offset,string){
					var paths = key.split('.'),
						lookup = data;
					while(paths.length>0){
						lookup = lookup[paths.shift()];
					}
					return lookup||raw;
			});
}},this);