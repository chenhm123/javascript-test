var Util = {
	isNumber:function(e1){
		return typeof e1 === "number";
	},
	isString:function(e1){
		return typeof e1 === "string";
	},
	isBoolean:function(e1){
		return typeof e1 === "boolean";
	},
	isFunction:function(e1){
		return typeof e1 === 'function';
	},
	isArray:function(e1){
		if(Array.isArray){
			return Array.isArray(e1);
		}else{
			return Object.prototype.toString.call(e1) === "[object Array]";//e1.constructor.prototype = []
		}
	},
	isJSON:function(e1){
		return typeof e1 === "ojbect" && e1.toString() === "[object Object]" ;
	},
	isSimpleType:function(e1){
		return this.isNumber(e1) || this.isString(e1) || this.isBoolean(e1) || e1===null || e1 === undefined;
	},
	isEmptyObject:function(e1){
		if(!this.isJSON(e1)){
			return false;
		}
		if(Object.keys){
			return Object.keys(e1).length === 0;
		}
		for(var prop in e1){
			return false;
		}
		return true;
	},
	cloneJSON:function(json){
		if(!this.isJSON(json)){
			return {};
		}
		var newJSON = {};
		for(var key in json){
			var value = json[key];
			if(this.isSimpleType(value)){
				newJSON[key] = value;
			}else if(this.isJSON(value)){
				newJSON[key] = this.cloneJSON(value);
			}else if(this.isArray){
				newJSON[key] = this.cloneArray(value);
			}
		}
		return newJSON;
	},

	cloneArray:function(arr){
		if(!this.isArray(arr)){
			return [];
		}
		var newArr = [];
		for(var i = 0 ;i<arr.length;i++){
			var value = arr[i];
			if(this.isEmptyObject(value)){
				newArr.push(value);
			}else if(this.isJSON(value)){
				newArr.push(this.cloneArray(value));
			}else if(this.isArray(value)){
				newArr.push(this.cloneArray(value));
			}
		};
		return newArr;
	},
	deepClone:function(obj){
		var output;
		if(this.isArray(obj)){
			output = this.cloneArray(obj);
		}else if(this.isJSON(obj)){
			output = this.cloneJSON(obj);
		}
		return output;
	},
	arrayMax:function(arr){
		return Math.max.apply(null,arr);
	},
	arrayMin:function(arr){
		return Math.min.apply(null,arr);
	},
	arraySortRaise:function(arr){
		arr.sort(function(a,b){
			return a>b;
		});
		return arr;
	},
	arraySortDrop:function(arr){
		arr.sort(function(a,b){
			return a<b;
		});
		return arr;
	},
	arrayUnique:function(arr){
		var map = {};
		for(var i =0;i<arr.length;i++){
			if(map.hasOwnProperty(arr[i])){
				arr.splice(i,1);
				i--;
			}else{
				map[arr[i]] = 1;
			}
		}
		return arr;
	},
	isInArray:function(value,arr){
		if(!this.isArray(arr)){
			return false;
		}
		for(var i = 0;i<arr.length;i++){
			if(value === arr[i]){
				return true;
			}
		}
		return false;
	},
	

}