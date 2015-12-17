module.exports = function(grunt){
	grunt.initConfig({
		pkg:grunt.file.readJSON('package.json'),
		uglify:{
			options:{
				stripBanners:true,
				banner:'/*!<%=pkg.name%>-<%=pkg.version%>.js <%=grunt.template.today("yyyy-mm-dd")%>*/\n'
			},
			build:{
				src:'src/test.js',
				dest:'build/<%=pkg.name%>-<%=pkg.version%>.js.min.js'
			}
		},
		jshint:{
			build:['Gruntfile.js','src/*.js'],
			options:{
				jshintrc:'.jshintrc'
			}
		},
		watch:{
			build:{
				files:['src/*js','src/*.css'],
				tasks:['jshint','uglify'],
				options:{spawn:false}
			}
		}

	});
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.registerTask('default',['jshint','uglify','watch']);
};