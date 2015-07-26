
exports.config =
  paths:
    watched: ['source']
    public: 'build'

  files:
    javascripts:
      joinTo: 'js/application.js'

    stylesheets:
      joinTo: 'css/application.css'


  plugins:
      uglify:
        mangle: false
        compress: true

