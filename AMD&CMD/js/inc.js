(function(name,definition,context){
	if(typeof module !='undefined' && module.exports){
		//nodeJs
		module.exports = definition()
	}else if(typeof context['define']=='function'&&(context['define']['amd']||context['define']['cmd'])){
		//AMD requireJs    CMD sea.js
		define(definition)
	}else{
		context[name] = definition()
	}
})('Inc',function(){
	var inc = (function(){
		'use strict'

		var a = 1

		function inc(){
			a++
		}

		function get(){
			return a
		}

		return {
			inc : inc,
			get : get
		}

	})()
	return inc
},this);