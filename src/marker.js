const mapboxgl = require('mapbox-gl')

const images = {
  hotel: "http://i.imgur.com/D9574Cu.png",
  restaurant: "http://i.imgur.com/cqR6pUI.png",
  activity: "http://i.imgur.com/WbMOfMl.png",
  poop: "https://i.imgur.com/AMlpB9C.png?1"
};

function buildMarker(type, longitude, latitude){
  return new mapboxgl.Marker(marker(type)).setLngLat([longitude, latitude])
}

function marker(type){
  const markerDomEl = document.createElement("div"); // Create a new, detached DIV
  markerDomEl.style.width = "32px";
  markerDomEl.style.height = "39px";
  markerDomEl.style.backgroundImage = `url(${images[type]})`;
  return markerDomEl
}

module.exports = buildMarker
