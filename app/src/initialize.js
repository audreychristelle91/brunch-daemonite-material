var $ = jQuery = require('jquery');
require('textillate');

var app = {
    layers:{},
    markers:null,
    loadMap: function () {
        var token ="pk.eyJ1IjoibWF0aGlhc2dhYnJpZWwiLCJhIjoiY2prem1yYnhtMHZ1MjNwcWpxdzU1NXNuNyJ9.51ZtenOgQKImt4uVcp5mPA"; // replace with your Mapbox API Access token. Create a Mabpox account and find it on https://www.mapbox.com/studio/

        var map = L.map('map',{
                maxZoom: 18,
                minZoom: 4
        }).setView([ 36.204824, 138.252924], 7);
        var gl = L.mapboxGL({
            accessToken: token,
            style: 'mapbox://styles/mapbox/streets-v11'
        }).addTo(map);

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

    //slider
        $('.carousel').carousel();
        $('.next').click(function(){ $('.carousel').carousel('next');return false; });
        $('.prev').click(function(){ $('.carousel').carousel('prev');return false; });
        
    //menu
        $('#button-menu').click(function(){
        //  document.getElementById("nav-filter").classList.toggle("visible");
          $("#nav-filter").toggleClass( "visible" );

        });
        var map = app.loadMap();
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
      });

        $.getJSON( "http://esombe-5.scan-world.info/posts/Japon/0/6", function( data ) {
            var menuFilter = new Vue({
                el: '#articles',
                data: {
                    items1: data.slice(0, 3),
                    items2: data.slice(3, 6)
                }
            });
        });

  }

};

$(app.init);
