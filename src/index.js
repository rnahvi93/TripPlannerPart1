//console.log("Hello from JavaScript");


const mapboxgl = require("mapbox-gl");

//mapboxgl.accessToken = "YOUR API TOKEN HERE";

mapboxgl.accessToken = 'pk.eyJ1IjoianZhc3F1ZXo4Njg2IiwiYSI6ImNqb2dmZnNiZjBlcGkzeHBoenZrZm1ob2MifQ.gj84CFB8iABE18OdqPm_0Q';

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});


const markerDomEl = document.createElement("div");
markerDomEl.style.width = "32px";
markerDomEl.style.height = "39px";
markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
new mapboxgl.Marker(markerDomEl).setLngLat([-74.009, 40.705]).addTo(map);