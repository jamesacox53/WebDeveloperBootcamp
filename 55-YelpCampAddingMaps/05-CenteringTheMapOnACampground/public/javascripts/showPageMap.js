const campGeoObj = JSON.parse(campGeoStr);
const centerArr = campGeoObj.coordinates || [-74.5, 40];

mapboxgl.accessToken = mapToken;
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v12', // style URL
    center: centerArr, // starting position [lng, lat]
    zoom: 9, // starting zoom
});

new mapboxgl.Marker()
    .setLngLat(centerArr)
    .addTo(map);