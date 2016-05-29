function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
  /* Additional Map Code Here */ 
  	  center: {
      lat: 48.856614,
      lng: 2.352222
    },
    zoom: 10,
    mapTypeId: google.maps.MapTypeId.ROADMAP

  });
 }
