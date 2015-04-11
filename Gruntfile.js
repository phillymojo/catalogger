module.exports = function(grunt){
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		concat: {
			templates: {
				options: {
					seperator: ';'
				},
				src: ['build/templates/**/*.js'],
				dest: 'public/js/templates.js'
			}
		},

		uglify: {
			templates: {
				options: {
					banner: '/*! <%= pkg.name %>  <%= grunt.template.today("dd-mm-yyyy") %> */\n'
				},
				files: {
					'public/js/templates.min.js': ['<%= concat.templates.dest %>']
				}
			}
		},

		watch: {
			scripts: {
				files: ['src/js/**/*.js'],
				tasks: ['concat', 'uglify']				
			},
			jsx: {
				files: ['src/jsx/**/*.jsx'],
				tasks: ['newer:react', 'concat:templates', 'uglify:templates']
			}
		},

		react: {
			jsx: {
				files: [
					{
						expand: true,
						cwd: 'src/jsx',
						src: ['**/*.jsx'],
						dest: 'build/templates',
						ext: '.js'
					}
				]
			}
		}

	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-react');
	grunt.loadNpmTasks('grunt-newer');

	grunt.registerTask('default', ['concat', 'uglify']);
};