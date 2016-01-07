function template(tpl,data){
	var re = /{{[a-zA-Z$_][a-zA-Z0-9\.]*/g;
	return tpl.replace(re,function(raw,key,offset,string){
		var paths = key.split('.'),
			lookup = data;
			while(paths.length>0){
				lookup = lookup[paths.shift()];
			}
			return lookup||raw;
	});
}