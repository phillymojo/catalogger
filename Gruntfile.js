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
			},
			models: {
				options: {
					seperator: ';'
				},
				src: ['src/models/**/*.js'],
				dest: 'public/js/models.js'
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
			},
			models: {
				options: {
					banner: '/*! <%= pkg.name %> Models <%= grunt.template.today("dd-mm-yyyy") %> */\n'
				},
				files: {
					'public/js/models.min.js': ['<%= concat.models.dest  %>']
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
			},
			models: {
				files: ['src/models/**/*.js'],
				tasks: ['concat:models', 'uglify:models']
			},
			browserify: {
				files: ['app.js', 'components/**/*.js'],
				tasks: ['browserify:main']
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
		},

		browserify: {
			main: {
				src: 'app.js',
				dest: 'public/js/bundle.js'
			},
			options: {
				transform: ['reactify']
			}
		}

	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-react');
	grunt.loadNpmTasks('grunt-newer');
	grunt.loadNpmTasks('grunt-browserify');

	grunt.registerTask('default', ['concat', 'uglify']);
};