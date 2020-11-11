# MNmn Map Documentations

---

For the *University of St. Thomas' Stelar* department

###### author: Luca Comba

---

# TO DO

- [x] Finish Selection (Remove and Update Markers)

- [x] Search options (Name of orgs, Kewords)

- [x] Make popup

- [ ] Show search result options

# File Structure

The file needed for the functuning of the map are:

- `index.html` which is what is shown in the web application

- `index.css` is the styling of the map. See that there are multiple z-index, One for the map and one for the user interaction such as the search bar.

- `script.js` 

Also, the `index.html` file need to use the internal *index.css* file, *Leaflet*, *JQuery*, *Vue* and *script.js* (some from CMD links).

# Documentation

##### script.js

We are using Vue.js for building a model that front end will be update.

```
// VUE JS
app = new Vue({
  el: '#app',
  data: {
    input: "",
    data: [],
    searchTypeOptions: ['sfc','sfo','mo'],
    markers: []
  },
  methods: 
    Search: Search,
    Filter: Filter
  }
});
```

**How it works?**

`input` variable contains the text that the user insert in the searchbox, which can be a name, a tag or an address. This app variable is used in the `Search` function. The variable `data` is an array that contains every `orgs`, which is the json object that have the data for the organizations that are shown in the map. 

After creating the app, *Vue.JS*, model we have create the map using leaflet. Then for each organization object, which contains all the information to show in the map, we update the latitude and longitude array of the object, create a Popup and then add the marker to the object and to an array in the Vue app model.

After have set these variables and markers up, we need for the user interaction with the search bar or the selections. If the user types something in the search bar, it will trigger the `Search()` function, while for the interaction of the selection boxes it will use the function `Filter()`

It uses four main functions:

- `Init()` it will create the app model for the Vue object and then create a LeafLet map for then updating each organizations object with the correct latitude and longitude as well as creating markers with their popup.

- `Filter(event)` Filters the three categories of the id checkbox in the index.html file. If thery are all three options selected then close all popups othewise open popups of marker that have the searchTypeOption

- `Search(event)` Search a text in the names or a tag, if not present just look for an address.

- `setNominatim(data)` it is used for the nominatim get request at the url https://nominatim.openstreetmap.org/search?<params>

###### organizations.json

```
{   "name": "Organization Name",
      "address": "Avenue",
      "city": "St. Paul",
      "contact_person":"",
      "phone":"612 XXX XXXX",
      "email":"email@email.com",
      "category":"sfo",
      "tag":"",
      "description":"description",
      "website":"",
      "img":"",
      "latlng":[],
      "marker":null
  }
```

This an empty organization template for showing the popup and data in the Map.

***<u>Variables***</u>:

- `category` can be **sfc**,**sfo**,**mo** which correspond to **single faith community**, **single faith organization** and **multifaith organization**.

- `tag` are a collections of keywords that the user can use for filtering the organizations

- `website` and `img` should be valid link that will be shown in the Popup.

- The `marker` and `latlng` field need to be empty: Do not modify them (they will be processed based on the address in the `Init()` function).

**If need to create or add a new organization** just copy and paste the code shown above to the variable `orgs` in the script.js,and add the needed information. Remeber to put a `,` comma before the previous one and no need a comma for the last organization.

# Resources

Some needed documentations are:

- Leaflet : [Documentation - Leaflet - a JavaScript library for interactive maps](https://leafletjs.com/reference-1.0.3.html)

- Nominatim : [Nominatim - OpenStreetMap Wiki](https://wiki.openstreetmap.org/wiki/Nominatim)

- Vue.js : [https://vuejs.org/](https://vuejs.org/)
