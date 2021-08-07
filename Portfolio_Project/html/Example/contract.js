<!-- JS Plugins Init. -->
$(document).on('ready', function () {
    // initialization of leaflet
    var leaflet = $.HSCore.components.HSLeaflet.init($('#mapExample1')[0]);

    leaflet.fire('movestart');
    leaflet._rawPanBy([leaflet.getCenter().lng + 250, leaflet.getCenter().lat]);
    leaflet.fire('move');
    leaflet.fire('moveend');

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
      id: 'mapbox/light-v9'
    }).addTo(leaflet);
  });
