var klass = require('./klass')

exports.add = function(klasses){

	klasses.forEach(function(item,index){
		var _klass = item
		var teacher = _klass.teacher
		var students = _klass.students
		klass.add(teacher,students)

	})

}
