(function(window,undefined){
	//根据窗口参数使用正确的文档
	var document = window.document,
		navigator = window.navigator,
		loaction = window.location;

	var jQuery = (function(selector,context){

		//定义一个jQuery映像
		var jQuery = function(selector,context){
			return new jQuery.fn.init(selector,context,rootjQuery);
		},

		//映射窗口里的jQuery，防止被重写
		_jQuery = window.jQuery,

		//映射窗口里的$，防止被重写
		_$ = window.$,

		//根据根jQuery文档，定义一个中心
		rootjQuery,

		//一个简单的方法去检查HTML字符串 或者 ID 字符串
		//优先查找id 越过标签，从而防止通过location哈希的XSS攻击
		quickExpr = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,

		//检测一个字符串是否非空
		rnotwhite = /\S/,

		//修剪空格
		trimLeft = /^\s+/,
		trimRight = /\s+$/,

		//匹配一个独立的标签
		rsingleTag = /^<(\w+)\s*\/?>(?:<\/\1>)?$/,

		// 匹配JSON
		rvalidchars = /^[\],:{}\s]*$/,
		rvalidescape = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
		rvalidtokens = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
		rvalidbraces = /(?:^|:|,)(?:\s*\[)+/g,

		// 匹配代理
		rwebkit = /(webkit)[ \/]([\w.]+)/,
		ropera = /(opera)(?:.*version)?[ \/]([\w.]+)/,
		rmsie = /(msie) ([\w.]+)/,
		rmozilla = /(mozilla)(?:.*? rv:([\w.]+))?/,

		// Matches dashed string for camelizing
		rdashAlpha = /-([a-z]|[0-9])/ig,
		rmsPrefix = /^-ms-/,

		//使用jQuery.camelCase 作为回调  去replace()
		fcamelCase = function(all,letter){
			return (letter+"").toUpperCase();
		},

		//使用jQuery.browser作为用户代理字符串
		userAgent = navigator.userAgent,

		//用来匹配浏览器的引擎和版本
		browserMatch,

		//准备好的DOM的延期列表
		readyList,

		//保存一些核心的方法
		toString = Object.prototype.toString,
		hasOwn = Object.prototype.hasOwnProperty,
		push = Array.prototype.push,
		slice = Array.prototype.slice,
		trim = Array.prototype.trim,
		indexOf = Array.prototype.indexOf,

		class2type = {};

		jQuery.fn = jQuery.prototype = {
			constructor:jQuery,
			init:function(selector,context,rootjQuery){
				var match,elem,ret,doc;

				//如果操作$(''),$(null),or $(undefined)
				if(!selector){
					return this;
				}

				//操作DOM元素
				if(selector.nodeType){
					this.context = this[0] = selector;
					this.length = 1;
					return this;
				}

				//body元素只存在一次，优先找到他
				if(selector ==='body' && !context && document.body){
					this.context = document;
					this[0] = document.body;
					this.selector = selector;
					this.length = 1;
					return this;
				}

				//操作HTML 字符串
				if(type select === "string"){
					//处理带有html字符串或者一个id的
					if(selector.charAt(0) === "<" && selector.charAt(selector.length-1) === ">" && selector.length>=3 ){
						match = [null,selector,null];
					}else{
						match = quickExpr.exec(selector);
					}

					if(match&&(match[1]||!context)){
						if(match[1]){
							context = context instanceof jQuery? context[0]:context;
							docu = (context?context.ownerDocument||context :document);
							ret = rsingleTag.exec(selector);

							if(ret){
								if(jQuery.isPlainObject(context)){
									selector = [document.createElement(ret[1])];
									jQuery.fn.attr.call(selector,context,true);
								}else{
									selector = [doc.createElement(ret[1])];
								}
							}else{
								ret = jQuery.buildFragment([match[1]],[doc]);
								selector = (ret.cacheable?jQuery.clone(ret.fragment):ret.fragment).childNodes;
								return jQuery.merge(this,selector);
							}
						}else{
							elem = document.getElementById(match[2]);

							if(elem && elem.parentNode){
								if(elem.id!==match[2]){
									return rootjQuery.find(selector);
								}
								this.length = 1;
								this[0] = elem;
							}
							this.context = document;
							this.selector = selector;
							return this;
						}
					}else if(!context || context.jquery){
						return (context||rootjQuery).find(selector);
					}else{
						return this.constructor(context).find(selector);
					}
				}else if(jQuery.isFunction(selector)){
					return rootjQuery.ready(selector);
				}
				if(selector.selector!==undefined){
					this.selector = selector.selector;
					this.context = selector.context;
				}
				return jQuery.makeArray(selector,this);
			},
			selector:"",
		},
		selector:"",
		jquery:"1.7,2",
		length:0,
		size:function(){
			return this.length;
		},
		toArray:function(){
			return slice.call(this,0);
		},
		get:function(num){
			return num == null?this.toArray() : (num<0?this[this.length + num]:this[num]);
		},
		pushStack:function(elems,name,selector){
			var ret = this.constructor();

			if(jQuery.isArray(elems)){
				push.apply(ret,elems);
			}else{
				jQuery.marge(ret,elems);
			}

			ret.prevObject = this;

			ret.context = this.context;

			if(name === 'find'){
				ret.selector = this.selector + (this.selector?" ":"")+selector;
			}else if(name){
				ret.selector = this.selector + "." + name + "(" + selector + ")";
			}
			return ret;


		}


	})()
})(window);