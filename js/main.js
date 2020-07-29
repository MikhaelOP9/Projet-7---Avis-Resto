var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!'
    }
  })


/*Read data.json file*/
var req = new XMLHttpRequest();

// La requête est asynchrone lorsque le 3ème paramètre vaut true ou est absent
req.open("GET", "http://localhost/avisResto/data/data.json");
// Gestion de l'événement indiquant la fin de la requête
req.addEventListener("load", function () {
    // Affiche la réponse reçue pour la requête
    var myData = JSON.parse(req.responseText);

    document.getElementById("app").innerHTML = myData[0].restaurantName;
    document.getElementById("app1").innerHTML = myData[0].address;
    document.getElementById("app2").innerHTML = myData[1].restaurantName;
    document.getElementById("app3").innerHTML = myData[1].address;
    document.getElementById("app4").innerHTML = myData[2].restaurantName;
    document.getElementById("app5").innerHTML = myData[2].address;
    document.getElementById("app6").innerHTML = myData[3].restaurantName;
    document.getElementById("app7").innerHTML = myData[3].address;
    document.getElementById("app8").innerHTML = myData[4].restaurantName;
    document.getElementById("app9").innerHTML = myData[4].address;
});
req.send(null);

 // Note: This example requires that you consent to location sharing when
        // prompted by your browser. If you see the error "The Geolocation service
        // failed.", it means you probably did not give permission for the browser to
        // locate you.
var map, infoWindow;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 48.8534, lng: 2.3488},
    zoom: 15
    });
    infoWindow = new google.maps.InfoWindow;

    // Try HTML5 geolocation.
    if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
        var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
        };

        infoWindow.setPosition(pos);
        infoWindow.setContent('Vous êtes ici');
        infoWindow.open(map);
        map.setCenter(pos);

    }, function() {
        handleLocationError(true, infoWindow, map.getCenter());
    });
    } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
    }
}
  
function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
                        'Error: The Geolocation service failed.' :
                        'Error: Your browser doesn\'t support geolocation.');
    infoWindow.open(map);
}

