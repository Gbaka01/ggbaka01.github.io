var mapElement = document.getElementById("map");

//Paramétrage de la carte
var mapOptions = {
    zoom: 14,
    center: {
            lat: 48.8566,
            lng: 2.3522
        }
}

//Création de la carte
function initMap() {
    new google.maps.Map(mapElement, mapOptions);
}