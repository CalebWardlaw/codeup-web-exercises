mapboxgl.accessToken = mapboxTokenTwo;

var mapOptions = {
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
    center: [-117.08838559392623 ,32.62931741769846], // starting position [lng, lat]
    zoom: 15 // starting zoom
}


var map = new mapboxgl.Map(mapOptions);

var markerOptions = {
    color: "#ff0000"
}
var popup = new mapboxgl.Popup()
    .setHTML("<p>Tacos El Gordo!</p>")
    .addTo(map)

var tacosElGordo = new mapboxgl.Marker(markerOptions)
    .setLngLat([-117.08838559392623 ,32.62931741769846])
    .addTo(map);

tacosElGordo.setPopup(popup)

var miRancho = new mapboxgl.Marker(markerOptions)
    .setLngLat([-117.12473852523831, 32.693449263010116])
    .addTo(map);

miRancho.setPopup(popup)

var fogoDeChao = new mapboxgl.Marker(markerOptions)
    .setLngLat([-117.15889455779005, 32.71251407884279])
    .addTo(map);

fogoDeChao.setPopup(popup)

var restaurant = [tacosElGordo, miRancho, fogoDeChao]

restaurant.forEach()