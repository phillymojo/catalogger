module.exports = function(grunt){
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		concat: {
			js: {
				options: {
					seperator: ';'
				},
				src: ['src/js/**/*.js'],
				dest: 'public/js/main.js'
			},
			libs: {
				options: {
					seperator: ';'
				},
				src: ['src/libs/jquery*.js','src/libs/*.js'],
				dest: 'public/js/libs.js'
			}
		},

		uglify: {
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
				files: ['src/js/*.js'],
				tasks: ['concat:js', 'uglify:js']				
			},
			libs: {
				files: ['src/libs/*.js'],
				tasks: ['concat:libs']
			},
			browserify: {
				files: ['app.js', 'components/**/*.js'],
				tasks: ['browserify:main']
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
	grunt.loadNpmTasks('grunt-browserify');

	grunt.registerTask('default', ['concat', 'uglify']);
};