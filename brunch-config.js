// See http://brunch.io for documentation.
exports.files = {
  javascripts: {
    joinTo: {
      'js/app.js' : /^app/,
      'js/vendor.js' : /^node_modules/,
    }
  },
  stylesheets: {
      joinTo: {
          'css/app.css': /^app/,
          'css/vendor.css': /^node_modules/
      }
  }
};

exports.plugins = {
  browserSync: {
    logLevel: 'debug',
    server: 'public', //travail en local - sans PHP
    files: [
      '*',
      'inc/*',
      'template-parts/*',
      'templates/*'
    ]
  },
  copycat: {
    fonts: [
      'node_modules/font-awesome/fonts'
    ]
  }
};

exports.npm = {
  globals: {
    $: 'jquery',
    jQuery: 'jquery',
    bootstrap: 'bootstrap',
    textillate: 'textillate',
    letteringjs: 'letteringjs',
    jqueyValidation: 'jquery-validation'
  },

  styles: {
    'bootstrap': ['dist/css/bootstrap.css'],
    'font-awesome': ['css/font-awesome.css'],
    'node-waves': ['dist/waves.css'],

  }
};

exports.modules = {
  autoRequire: {
    'js/app.js': ['src/initialize']
  }
}
