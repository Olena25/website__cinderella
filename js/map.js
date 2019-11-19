
function initMap() {
    var lviv = {lat: 49.800, lng: 24.012};
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 14, center: lviv,});
    var marker = new google.maps.Marker({position: lviv, map: map});
  }