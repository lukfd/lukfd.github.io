// Luca Comba
// Organization list
var orgs = [
  {   "name": "Archdiocese Commission for Ecumenical and Interfaith Relations",
      "address": "2028, Grand Avenue",
      "city": "St. Paul",
      "contact person":"",
      "phone":"",
      "email":"",
      "category":"sfc",
      "website":"",
      "logo":""
  },
  {   "name": "Try",
      "address": "2245, Summit Avenue",
      "city": "St. Paul",
      "contact person":"",
      "phone":"",
      "email":"",
      "category":"sfo",
      "website":"",
      "logo":""
  }
];

// global variable
var app;
var mymap;
// Minnesota Center Map
var lng = -94.648311
var lat = 46.108537
// For Nominatim
var addressLat;
var addressLng;

function Init() {
  // VUE JS
  app = new Vue({
    el: '#app',
    data: {
      input: "",
      data: [],
      searchTypeOptions: ['sfc','sfo','mo'],
      markers: []
    },
    methods: {
      Search: Search,
      Filter: Filter
    }
  })

  // MAP
  latlng = L.latLng(lat, lng);
	mymap = L.map('mapid', {
    minZoom: 0,
    maxZoom: 18
  }).setView(latlng, 7);
  var southWest = L.latLng(40, -80);
  var northEast = L.latLng(50, -100);
  var mybounds = L.latLngBounds(southWest, northEast);
  L.tileLayer('http://services.arcgisonline.com/arcgis/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
      bounds: mybounds,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(mymap);

  // loading marker
  if (app.data.length == 0) {
    app.data = orgs;
  }
  
  //var temp_list = [];

  app.data.forEach((obj) => {
    /*
    QUERY : https://nominatim.openstreetmap.org/search?<params>
      street=<housenumber> <streetname>
      city=<city>
      county=<county>
      state=<state>
      country=<country>
      postalcode=<postalcode>
    */

    // CONVERT FROM ADDRESS TO COORDINATES
    var queryNominatim = 'https://nominatim.openstreetmap.org/search?';

    let request = {
      url: queryNominatim + 'street='+ obj.address +
      '&city='+ obj.city.replace(/\s/g,"%20") +'&state=MN&format=json',
      dataType: "json",
      success: setNominatim
    };
    // make get request
    $.ajax(request).then(() => {
      var marker = L.marker([addressLat, addressLng]).addTo(mymap);
      
      marker.bindPopup(
        "<h3>"+obj.name+"</h3>");

      //temp_list.push(marker);
    });
    
  });
  // var markers = L.layerGroup(temp_list);

  // var overlay = {
  //   "Markers": markers
  // }
  // //console.log(temp_list);
  // L.control.layers(overlay).addTo(mymap);
  // mymap.addLayer(overlay); 
  
}

function Filter(event) {
  app.data = orgs;
  var newData = [];
  app.data.forEach((obj) => {
    for (var i = 0; i < app.searchTypeOptions.length; i++) {
      if (obj.category == app.searchTypeOptions[i]) {
        newData.push(obj);
      }
    }
  });

  // updating app's data
  app.data = newData;
  // TO-DO
  // Clear map markers
  // remove all the markers in one go
  app.markers.clearLayers();
  // Update Markers

}

function Search(event) {
  /*
  QUERY : https://nominatim.openstreetmap.org/search?<params>
  	street=<housenumber> <streetname>
  	city=<city>
  	county=<county>
  	state=<state>
  	country=<country>
  	postalcode=<postalcode>
  */
  var queryNominatim = 'https://nominatim.openstreetmap.org/search?';
  var streetName = app.input.replace(/\s/g, '%20');
  // Check if they typed a name
  app.data.forEach((obj) => {
    if (obj.name.includes(app.input)) {
      streetName = obj.address.replace(/\s/g, '%20');;
    }
  });
  // MAKE THE SEARCH
  let request = {
        url: queryNominatim + 'street='+ streetName +'&state=MN&format=json',
        dataType: "json",
        success: setNominatim
  };

  $.ajax(request).then(() => {
    latlng = L.latLng(addressLat, addressLng);
    mymap.flyTo(latlng, 15);
  });	
}

function setNominatim(data){
  addressLat = data[0].lat;
  addressLng = data[0].lon;
}