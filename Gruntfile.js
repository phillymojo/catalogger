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
			},
			js: {
				options: {
					seperator: ';'
				},
				src: ['src/js/**/*.js'],
				dest: 'public/js/main.js'
			}
		},

		uglify: {
			templates: {
				options: {
					banner: '/*! <%= pkg.name %> Templates  <%= grunt.template.today("dd-mm-yyyy") %> */\n'
				},
				files: {
					'public/js/templates.min.js': ['<%= concat.templates.dest %>']
				}
			},
			js: {
				options: {
					banner: '/*! <%= pkg.name %> JS files <%= grunt.template.today("dd-mm-yyyy") %> */\n'
				},
				files: {
					'public/js/main.min.js': ['<%= concat.js.dest %>']
				}
			}
		},

		watch: {
			scripts: {
				files: ['src/js/**/*.js'],
				tasks: ['concat:js', 'uglify:js']				
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