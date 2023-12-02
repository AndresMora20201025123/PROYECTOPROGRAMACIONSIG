// main1.js
//import 'ol/ol.css';
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';

document.addEventListener('DOMContentLoaded', function() {
  const map = new Map({
    target: 'map',
    layers: [new TileLayer({ source: new OSM() })],
    view: new View({ center: [0, 0], zoom: 2 })
  });
});
