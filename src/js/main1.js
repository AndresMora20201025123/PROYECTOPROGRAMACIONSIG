// main1.js
//import 'ol/ol.css';
import  Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';

//Capa GeoJSON
const geojsonLayer = new VectorLayer ({
  source: new VectorSource ({
      url: '/datos/Estaciones_Troncales_de_TRANSMILENIO.geojson', //Ruta de archivo GeoJSON
      format: new GeoJSON ()
  })
});
const geojsonLayer01 = new VectorLayer ({
  source: new VectorSource ({
      url: '/datos/Rutas_Troncales_de_TRANSMILENIO.geojson', //Ruta de archivo GeoJSON
      format: new GeoJSON ()
  })
});
const geojsonLayer02 = new VectorLayer ({
  source: new VectorSource ({
      url: '/datos/malla-vial37.geojson', //Ruta de archivo GeoJSON
      format: new GeoJSON ()
  })
});
const geojsonLayer03 = new VectorLayer ({
  source: new VectorSource ({
      url: '/datos/barrios-bogota.geojson', //Ruta de archivo GeoJSON
      format: new GeoJSON ()
  })
});

// Crear una instancia del mapa
var map = new Map({
  target: 'map', // ID del elemento HTML donde se mostrará el mapa
  layers: [
    new TileLayer({
      source: new OSM() // Capa base de OpenStreetMap
    })
  ],
  view: new View({
    center: [0, 0], // Coordenadas del centro del mapa
    zoom: 10 // Nivel de zoom inicial
  })
});


map.addLayer (geojsonLayer);
map.addLayer (geojsonLayer01);
map.addLayer (geojsonLayer02);
map.addLayer (geojsonLayer03);