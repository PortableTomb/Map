
    // This example adds a search box to a map, using the Google Place Autocomplete
// feature. People can enter geographical searches. The search box will return a
// pick list containing a mix of places and predicted search terms.

// This example requires the Places library. Include the libraries=places
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">

var marker;
var markerTwo;
var map;
var mapTwo;
function initAutocomplete() {
  
	 var styles = [
    {
      stylers: [
        { hue: "#ffff00" },
        { saturation: -75}
      ]
    },{
      featureType: "road",
      elementType: "geometry",
      stylers: [
        { lightness: 100 },
        { visibility: "simplified" }
      ]
    },{
      featureType: "road",
      elementType: "labels",
      stylers: [
        { visibility: "off" }
      ]
    }
  ];

  var myLatLng = { lat: 48.856614, lng: 2.352222 };
  var myLatLng2 = { lat: 48.856614, lng: 2.352222 };

  map = new google.maps.Map(document.getElementById('map'), {
    center: myLatLng,
    zoom: 10,
    styles: styles,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
  });

   mapTwo = new google.maps.Map(document.getElementById('mapTwo'), {
	 zoom: 10,
	 styles: styles,
	 center: myLatLng2,
	 mapTypeId: google.maps.MapTypeId.ROADMAP,
  });


	    addMarker({lat: 48.8584, lng: 2.2945}, 'Eiffel Tower');
	    addMarker({lat: 48.8530, lng: 2.3499}, 'Notre Dame');
	    addMarker({lat: 48.8606, lng: 2.3376}, 'Musee du Louvre');
	    addMarker({lat: 48.8841, lng: 2.3323}, 'Moulin Rouge');
	    addMarker({lat: 48.9014, lng: 2.3437}, 'Marche aux Puces');
	    addMarker({lat: 48.8606, lng: 2.3522}, 'Centre Pompidou');
		
    // 	declared add marker function
	function addMarker(location, title) {
	markerTwo = new google.maps.Marker({
		position: location,
		map: mapTwo,
		title: title
		})
	}


  // Create the search box and link it to the UI element.
  var input = document.getElementById('pac-input');
  var searchBox = new google.maps.places.SearchBox(input);
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

  // Bias the SearchBox results towards current map's viewport.
  map.addListener('bounds_changed', function() {
    searchBox.setBounds(map.getBounds());
  });

  var markers = [];
  // Listen for the event fired when the user selects a prediction and retrieve
  // more details for that place.
  searchBox.addListener('places_changed', function() {
    var places = searchBox.getPlaces();

    if (places.length == 0) {
      return;
    }

    // Clear out the old markers.
    markers.forEach(function(marker) {
    marker.setMap(null);
    });
    markers = [];

    // For each place, get the icon, name and location.
    var bounds = new google.maps.LatLngBounds();
    places.forEach(function(place) {
      var icon = {
        url: place.icon,
        size: new google.maps.Size(11, 11),
        origin: new google.maps.Point(15, 15),
        anchor: new google.maps.Point(17, 17),
        scaledSize: new google.maps.Size(15, 15)
      };

      // Create a marker for each place.
      markers.push(new google.maps.Marker({
        map: map,
        icon: marker,
        title: place.name,
        position: place.geometry.location
      }));

      if (place.geometry.viewport) {
        // Only geocodes have viewport.
        bounds.union(place.geometry.viewport);
      } else {
        bounds.extend(place.geometry.location);
      }
    });
    map.fitBounds(bounds);
  });


var button = document.getElementById("trigger-search").onclick = function(){
    var places = searchBox.getPlaces();
}



}


 


    




