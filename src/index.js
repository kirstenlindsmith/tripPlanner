const mapboxgl = require('mapbox-gl')
mapboxgl.accessToken = 'pk.eyJ1Ijoia2lyc3RlbmxpbmRzbWl0aCIsImEiOiJjanI4OGlrZTAwMmxuNDNydnVsaHRidDkwIn0.Coxqk8g4uFmln3inLa-Apw'
const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});
// const { activityMarker, hotelMarker, restaurantMarker, poopMarker }  = require('./marker.js')
const buildMarker  = require('./marker.js') //takes type, longitude, latitude

buildMarker('activity', -74.009, 40.705)
// new mapboxgl.Marker(activityMarker()).setLngLat([-74.009, 40.705]).addTo(map);//FSA

// new mapboxgl.Marker(hotelMarker()).setLngLat([-74.005365, 40.72547]).addTo(map);

// new mapboxgl.Marker(restaurantMarker()).setLngLat([-73.983865, 40.721274]).addTo(map);

// new mapboxgl.Marker(poopMarker()).setLngLat([-74.011266, 40.70688]).addTo(map);
