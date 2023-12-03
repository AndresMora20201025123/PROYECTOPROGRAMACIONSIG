// main.js
//import 'ol/ol.css';
import  Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import GeoJSON from 'ol/format/GeoJSON';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import { Overlay } from 'ol';
import interaction from 'ol/interaction';
import { Select } from 'ol/interaction'; //Select }
import { fromLonLat } from 'ol/proj';
import { transform } from 'ol/proj';

//Capa GeoJSON
const geojsonLayerEstaciones = new VectorLayer ({
  source: new VectorSource ({
      url: '/datos/Estaciones_Troncales_de_TRANSMILENIO.geojson', //Ruta de archivo GeoJSON
      format: new GeoJSON ()
  })
});
const geojsonLayerRutas = new VectorLayer ({
  source: new VectorSource ({
      url: '/datos/Rutas_Troncales_de_TRANSMILENIO.geojson', //Ruta de archivo GeoJSON
      format: new GeoJSON ()
  })
});
const geojsonLayermalla = new VectorLayer ({
  source: new VectorSource ({
      url: '/datos/malla-vial37.geojson', //Ruta de archivo GeoJSON
      format: new GeoJSON ()
  })
});
const geojsonLayerbarrio = new VectorLayer ({
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
    }),
    geojsonLayerEstaciones,
    geojsonLayerRutas,
    geojsonLayermalla,
    geojsonLayerbarrio
  ],
  view: new View({
    center: fromLonLat([-74.0721, 4.7110]), // Coordenadas del centro del mapa
    zoom: 10 // Nivel de zoom inicial
  })
});

// Añadir una interacción de selección al mapa
var selectInteraction = new select.Select();
map.addInteraction(selectInteraction);

// Obtener la capa de estaciones
var stationsLayer = geojsonLayerEstaciones;

// Crear un elemento HTML que se utilizará para mostrar la información de la estación
var stationInfoElement = document.createElement('div');
stationInfoElement.id = 'station-info';
document.body.appendChild(stationInfoElement);

// Crear una capa Overlay para mostrar el contenido del diálogo
var stationInfoOverlay = new Overlay({
  element: stationInfoElement,
  positioning: 'bottom-center',
  stopEvent: false
});
map.addOverlay(stationInfoOverlay);

// Manejar el evento de clic en la capa de estaciones
stationsLayer.on('click', function(event) {
  // Obtener la característica (estación) seleccionada
  var selectedFeature = event.feature;

  // Obtener los datos de la estación seleccionada
  var stationData = selectedFeature.getProperties(); // Puedes especificar las propiedades específicas que deseas mostrar

  // Actualizar el contenido del diálogo con la información de la estación
  stationInfoElement.innerHTML = `
    <p>Nombre: ${stationData.nombre}</p>
    <p>Ubicación: ${stationData.ubicacion}</p>
    <p>...</p>
  `;

  // Obtener las coordenadas del evento de clic
  var coordinates = event.coordinate;

  // Mostrar el diálogo en las coordenadas del evento de clic
  stationInfoOverlay.setPosition(coordinates);
});

//Ajustar posicion de las capas
geojsonLayerEstaciones.setZIndex(4);
geojsonLayerRutas.setZIndex(3);
geojsonLayermalla.setZIndex(2);
geojsonLayerbarrio.setZIndex(1);


map.addLayer (geojsonLayerEstaciones);
map.addLayer (geojsonLayerRutas);
//map.addLayer (geojsonLayermalla);
map.addLayer (geojsonLayerbarrio);