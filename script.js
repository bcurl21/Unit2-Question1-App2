  require([
    "esri/config",
    "esri/Map",
    "esri/views/MapView",
    "esri/layers/FeatureLayer"

  ], function(esriConfig, Map, MapView, FeatureLayer) {

  esriConfig.apiKey = "AAPKadbb47a8f4024f8694017868bb5f8514m-BINeDp-vV1s7yL8zwJeUAP-PbhOik8FZfNUXBo_uzR_cpQj_uun6RO5a5YScF7";

  const map = new Map({
    basemap: "arcgis-topographic"
  });

  const view = new MapView({
    container: "viewDiv",
    map: map,
    center: [-92,38],
    zoom: 7
  });

  const MO_counties = new FeatureLayer({
    url: "https://gis.mo.gov/arcgis01/rest/services/BaseMap/county_boundary/MapServer/0"
  });

  map.add(MO_counties);

  const MO_schools = new FeatureLayer({
    url: "https://gis.mo.gov/arcgis01/rest/services/DESE/School_District_Holly/MapServer/0"
  });

  map.add(MO_schools);

  });
