module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      options: {
        sourceMap: false
      },
      dist: {
        files: {
          'static/css/application.css': 'source/sass/application.scss'
        }
      }
    },
    autoprefixer: {
      options: {
        browsers: ['last 2 versions', 'ie 8', 'ie 9']
      },
      build: {
        src: 'static/css/application.css',
        dest: 'static/css/application.css'
      },
    },
    watch: {
      css: {
        files: ['source/sass/*.scss'],
        tasks: ['sass', 'autoprefixer']
      }
    }
  });

  // Load npm tasks
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['sass', 'autoprefixer']);

};
