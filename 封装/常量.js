var Class = (function(){
	var constants = {
		UPPER_BOUND:100,
		LOWER_BOUND:-100
	};
	var ctor = function(constructorArgument){

	};
	ctor.getConstant = function(name){
		return constants[name];
	}
	return ctor;
})();