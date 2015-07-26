
module.exports = function(grunt) {
  grunt.initConfig({

    coffee: {
      compileWithMaps: {
        options: {
          sourceMap: true,
          sourceMapDir: 'build/maps'
        },
        files: {
          'build/js/app.js': ['source/js/*.coffee']
        }
      }
    },

    uglify: {
      compress: {
        options: {
          sourceMap: true,
          sourceMapIn: 'build/maps/app.js.map',
          sourceMapIncludeSources: true
        },
        files: {
          'build/js/application.js': ['build/js/app.js']
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['coffee', 'uglify']);
};
