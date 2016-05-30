var map;
var marker;


function initMap() {
    var myLatLng = {lat: 48.856614, lng: 2.352222};

    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: myLatLng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    addMarker(myLatLng, "I\'m a marker!");
}
    
    function addMarker(location, title){
    marker = new google.maps.Marker({
        position: location,
        map: map,
        title: title
    });
}


