const campGeoObj = JSON.parse(campGeoStr);
const centerArr = campGeoObj.coordinates;

if (centerArr.length  < 1)
    centerArr = [-74.5, 40];

mapboxgl.accessToken = mapToken;
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v12', // style URL
    center: centerArr, // starting position [lng, lat]
    zoom: 9, // starting zoom
});

new mapboxgl.Marker()
    .setLngLat(centerArr)
    .setPopup(new mapboxgl.Popup({offset: 25 })
    .setHTML(`<h3>${campTitleStr}</h3><p>${campLocStr}</p>`))
    .addTo(map);