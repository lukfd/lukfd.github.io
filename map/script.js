/*Author: Luca Comba (luca.comba98@gmail.com)
  For University of St. Thomas' STELAR
*/ 

/* Organization list that will appear in the map

  Check README.md for more details to create a new popup
*/
var orgs = [
  {   "name": "Archdiocese Commission for Ecumenical and Interfaith Relations",
      "address": "2028, Grand Avenue",
      "city": "St. Paul",
      "contact_person":"",
      "phone":"612 707 9749",
      "email":"email@email.com",
      "category":"sfc",
      "tag":"prova, trova",
      "description":"description",
      "website":"",
      "img":"https://www.arcgis.com/sharing/rest/content/items/a21e3de5051f4549b1a9cff9c23badf7/resources/apeaceofmind__1591118209890__w1327.jpg",
      "latlng":[],
      "marker":null
  },
  {   "name": "Try",
      "address": "2245, Summit Avenue",
      "city": "St. Paul",
      "contact_person":"",
      "phone":"612 707 9749",
      "email":"email@email.com",
      "category":"sfo",
      "tag":"loon",
      "description":"description",
      "website":"",
      "img":"https://www.arcgis.com/sharing/rest/content/items/a21e3de5051f4549b1a9cff9c23badf7/resources/apeaceofmind__1591118209890__thumb.jpg",
      "latlng":[],
      "marker":null
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
      // Create POP UP
      var marker = L.marker([addressLat, addressLng], title = obj.name).addTo(mymap);

      // adding to obj.latlng FOR OPENING THE POP UP
      obj.latlng = [addressLat, addressLng];

      // Create POP UP
      marker.bindPopup(
        "<h3>"+obj.name+"</h3>"+
        '<img src="'+ obj.img +'" height="80px">'+
        '<div style="padding-top:3px;"></div>'+
        '<p>'+obj.description+'</p>'+
        '<div style="padding-top:3px;"></div>'+
        '<a href="'+obj.website+'">'+'visit their website'+'</a><br>'+
        '<a href="mailto:'+obj.email+'">'+'contact them at:'+obj.email+'</a>'+
        '<p>'+obj.contact_person+' '+obj.phone+'</p><br>'+
        '<p>Address: '+obj.address+'</p>', {
          minWidth : 100,
          autoClose: false
      });

      // add to Vue app's list markers that contains all markers
      app.markers.push(marker)

      // add to obj.marker the marker object
      obj.marker = marker;
    });
    
  });
  
}

/* Filters the three categories of #checkbox in index.html
   if thery are all three options selected then close all popups
   othewise open popups of marker that have the searchTypeOption
*/
function Filter(event) {
  // open popup only if one or two searchTypeOptions are selected
  if (app.searchTypeOptions.length < 3) {
    // which one to show
    app.data.forEach((obj) => {
      for (var i = 0; i < app.searchTypeOptions.length; i++) {
        if (obj.category == app.searchTypeOptions[i]) {
          obj.marker.openPopup();
        }
      }
    });
  } else {
    // close all popups
    app.markers.forEach((marker) => {
      marker.closePopup();
    });
  }
  
}

/* Search a text in the names, 
  if not present just look for an address

  BUG: lat lng to undefined location
*/
function Search(event) {
  // TO-DO
  // if user input a tag
  // Open POP UP when research found name or tag

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
    // typed the name
    if (obj.name.includes(app.input)) {
      streetName = obj.address.replace(/\s/g, '%20');

      // fly to the latlng
      //mymap.flyTo(obj.latlng, 15);
      obj.marker.openPopup();
    }
    // typed the a tag
    if (obj.tag.includes(app.input)) {
      obj.marker.openPopup();
    }
  });
  // OTHERWISE MAKE STREET SEARCH
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

/*  Function for the Nominatim.com get request
*/
function setNominatim(data){
  addressLat = data[0].lat;
  addressLng = data[0].lon;
}