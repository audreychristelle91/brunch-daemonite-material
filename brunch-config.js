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
    popper: 'popper.js',
    bootstrap: 'bootstrap',
    material: 'daemonite-material',
    textillate: 'textillate',
    letteringjs: 'letteringjs',
    jqueyValidation: 'jquery-validation',
    omnivore: 'leaflet-omnivore',
    mapboxgl: 'mapbox-gl',
    leaflet: 'leaflet',
    mapboxGlLeaflet: 'mapbox-gl-leaflet',
    markercluster: 'leaflet.markercluster'
  },

  styles: {
    'daemonite-material': ['css/material.css'],
    'font-awesome': ['css/font-awesome.css'],
    'node-waves': ['dist/waves.css'],
    'leaflet': ['dist/leaflet.css'],
    'leaflet.markercluster': ['dist/MarkerCluster.css','dist/MarkerCluster.Default.css'],
    'mapbox-gl': ['dist/mapbox-gl.css'],
  }
};

exports.modules = {
  autoRequire: {
    'js/app.js': ['src/initialize']
  }
}
