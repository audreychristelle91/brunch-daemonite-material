var $ = jQuery = require('jquery');
require('textillate');

var app = {

    layers:{},
    markers:null,
    loadMap: function () {

        /*mapboxgl.accessToken = 'pk.eyJ1IjoibWF0aGlhc2dhYnJpZWwiLCJhIjoiY2prem1yYnhtMHZ1MjNwcWpxdzU1NXNuNyJ9.51ZtenOgQKImt4uVcp5mPA';
        var map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [138.252924, 36.204824],
            zoom: 6
        });*/

        var map = L.map('map', {
            center: [36.204824, 138.252924],
            zoom: 10,
            maxZoom: 18,
            minZoom: 4
        });

        // Adding Mapbox
        var gl = L.mapboxGL({
            accessToken: 'pk.eyJ1IjoibWF0aGlhc2dhYnJpZWwiLCJhIjoiY2prem1yYnhtMHZ1MjNwcWpxdzU1NXNuNyJ9.51ZtenOgQKImt4uVcp5mPA',
            style: 'mapbox://styles/mapbox/streets-v11'
        }).addTo(map);
        map.fitWorld();

        return map;
    },
    loadTypeOfPoi: function (map, type) {

        if( app.markers != null ){
            map.removeLayer(app.markers);
        }

        var url = 'data/japan_kanto-'+type+'.geojson';
        console.log(url);
        app.markers = L.markerClusterGroup();
        var currentLayerPoi = omnivore.geojson(url)
            .on("ready", function() {
                console.log("add markers");
                app.markers.addLayer( currentLayerPoi );
                app.markers.addTo(map);
            });
        return currentLayerPoi;

    },
    init: function(){

		$('.test').textillate({ in: { effect: 'flip' } });
	//	$('#myNavdrawer').navdrawer();
		$("form[name='registration']").validate({
	    // Specify validation rules
	    rules: {
	      champ1: "required",
	    },
	    // Specify validation error messages
	    messages: {
	      champ1: "Please enter your firstname",
	    },
	    // Make sure the form is submitted to the destination defined
	    // in the "action" attribute of the form when valid
	    submitHandler: function(form) {
	      form.submit();
	    }
	  });

    //slider
        $('.carousel').carousel();
        $('.next').click(function(){ $('.carousel').carousel('next');return false; });
        $('.prev').click(function(){ $('.carousel').carousel('prev');return false; });


        var map = app.loadMap();

        //var geo = app.loadTypeOfPoi(map, "atm");

        var menuFilter = new Vue({
          el: '#marker-filter',
          data: {
              todos: [
                  { text: 'ATM', type:'atm' },
                  { text: 'Bakery', type:'bakery' },
                  { text: 'Banque', type:'bank' },
                  { text: 'fast food', type:'fast_food' },
                  { text: 'Mall', type:'mall' },
                  { text: 'Police', type:'police' },
                  { text: 'Park', type:'park' },
                  { text: 'Pharmacy', type:'pharmacy' },
                  { text: 'Restaurant', type:'restaurant' },
                  { text: 'Super market', type:'supermarket' },
                  { text: 'Toilet', type:'toilet' },
                  { text: 'Zoo', type:'zoo' },
                  { text: 'Musée', type:'museum' }
              ]
          },
          methods: {
              cleanMarkers: function () {
                  markers.remove();
                  this.message = this.message.split('').reverse().join('')
              },
              addMarkers: function (type) {
                  console.log("change markers: "+type);
                  var geo = app.loadTypeOfPoi(map, type);
              }
          }
      })
  }

};

$(app.init);
