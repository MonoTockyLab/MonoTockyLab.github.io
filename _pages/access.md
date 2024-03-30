---
layout: page
title: Access
permalink: /access/
map: true

---

#### The Ono lab is located on the South Kensington Campus of Imperial College London.

**Address**:

Department of Life Sciences

Imperial College London

London SW7 2AZ

<div class="row mt-6">
     <div class="col-sm mt-6 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/access/access1.jpg" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
    <div class="col-sm mt-6 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/access/access2.jpg" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
    
</div>

<!-- Include Leaflet CSS and JavaScript -->
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
   integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
   crossorigin=""/>
<script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
   integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA=="
   crossorigin=""></script>

<!-- Map Container -->
<div id="mapid" style="height: 400px;"></div>

<script>
    var mymap = L.map('mapid').setView([51.498,-0.176], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 18,
    }).addTo(mymap);

    var geojsonFeature = {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {},
          "geometry": {
            "coordinates": [
              [
                [-0.18564464698158645, 51.50248834632515],
                [-0.18564464698158645, 51.49334219783972],
                [-0.1677934718722156, 51.49334219783972],
                [-0.1677934718722156, 51.50248834632515],
                [-0.18564464698158645, 51.50248834632515]
              ]
            ],
            "type": "Polygon"
          }
        }
      ]
    };

    L.geoJSON(geojsonFeature).addTo(mymap);
</script>

---

Some occasional winter days as well.

<div class="row mt-6">
	<div class="col-sm mt-6 mt-md-0">
	        {% include figure.liquid loading="eager" path="assets/img/access/access3.jpg" class="img-fluid rounded z-depth-1" zoomable=true %} 
	</div>
	<div class="col-sm mt-6 mt-md-0">
	        {% include figure.liquid loading="eager" path="assets/img/access/monolab.jpg" class="img-fluid rounded z-depth-1" zoomable=true %} 
	</div>
</div>
