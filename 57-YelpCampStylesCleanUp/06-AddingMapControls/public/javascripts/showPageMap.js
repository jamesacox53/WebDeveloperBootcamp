const { geometryObj, titleStr, locationStr } = campMapObj;
const centerArr = geometryObj.coordinates;

if (centerArr.length  < 1)
    centerArr = [-74.5, 40];

mapboxgl.accessToken = mapToken;
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v12', // style URL
    center: centerArr, // starting position [lng, lat]
    zoom: 9, // starting zoom
});

map.addControl(new mapboxgl.NavigationControl());

new mapboxgl.Marker()
    .setLngLat(centerArr)
    .setPopup(new mapboxgl.Popup({offset: 25 })
    .setHTML(`<h3>${titleStr}</h3><p>${locationStr}</p>`))
    .addTo(map);