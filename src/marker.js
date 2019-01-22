const mapboxgl = require('mapbox-gl')

const images = {
  hotel: "http://i.imgur.com/D9574Cu.png",
  restaurant: "http://i.imgur.com/cqR6pUI.png",
  activity: "http://i.imgur.com/WbMOfMl.png",
  poop: "https://i.imgur.com/AMlpB9C.png?1"
};

function buildMarker(type, longitude, latitude){
  console.log(marker(type))
  new mapboxgl.Marker(marker(type)).setLngLat([-74.009, 40.705]).addTo(map)//`${longitude}, ${latitude}`]).addTo(map)
}

function marker(type){
  const markerDomEl = document.createElement("div"); // Create a new, detached DIV
  markerDomEl.style.width = "32px";
  markerDomEl.style.height = "39px";
  markerDomEl.style.backgroundImage = `url(${images[type]})`;
  return markerDomEl
}

module.exports = buildMarker

/*
module.exports = { activityMarker, hotelMarker, restaurantMarker, poopMarker }

function activityMarker(){
  const markerDomEl = document.createElement("div"); // Create a new, detached DIV
  markerDomEl.style.width = "32px";
  markerDomEl.style.height = "39px";
  markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
  return markerDomEl
}

function hotelMarker(){
  const markerDomEl = document.createElement("div"); // Create a new, detached DIV
  markerDomEl.style.width = "32px";
  markerDomEl.style.height = "39px";
  markerDomEl.style.backgroundImage = "url(http://i.imgur.com/D9574Cu.png)";
  return markerDomEl
}

function restaurantMarker(){
  const markerDomEl = document.createElement("div"); // Create a new, detached DIV
  markerDomEl.style.width = "32px";
  markerDomEl.style.height = "39px";
  markerDomEl.style.backgroundImage = "url(http://i.imgur.com/cqR6pUI.png)";
  return markerDomEl
}

function poopMarker(){
  const markerDomEl = document.createElement("div"); // Create a new, detached DIV
  markerDomEl.style.width = "32px";
  markerDomEl.style.height = "32px";
  markerDomEl.style.backgroundImage = "url(https://i.imgur.com/AMlpB9C.png?1)";
  return markerDomEl
}

*/
