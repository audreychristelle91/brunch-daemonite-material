var $ = jQuery = require('jquery');
require('textillate');

var app = {
  init: function(){
	//	alert("Coucou, c'est moi, c'est Lapinou");
		$('.test').textillate({ in: { effect: 'flip' } });
	//	$('#myNavdrawer').navdrawer();
		$("form[name='registration']").validate({
	    // Specify validation rules
	    rules: {
	      // The key name on the left side is the name attribute
	      // of an input field. Validation rules are defined
	      // on the right side
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

    // initialize the map on the "map" div with a given center and zoom
   var map = L.map('map', {
        center: [36.204824, 138.252924],
        zoom: 5,
        maxZoom: 18,
        minZoom: 4
    });


   // Adding Mapbox
    var gl = L.mapboxGL({
        accessToken: '<token>',
        style: 'mapbox://styles/saori91/cjj0csi7n0g6r2smpzioxf30j'
    }).addTo(map);
    map.fitWorld();

   // Adding OpenStreetMap
   // map.addLayer(tiles);

    var markers = L.markerClusterGroup();

    var geojsonLayer = omnivore.geojson('http://esombe-5.scan-world.info/posts/5000/geojson')
    .on("ready", function() {
    markers.addLayer(geojsonLayer);
    markers.addTo(map);
    });


  }

};

$(app.init);
