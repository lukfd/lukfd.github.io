// FILE: main.js

import { createApp } from 'vue'
import { Quasar } from 'quasar'
import quasarIconSet from 'quasar/icon-set/fontawesome-v6'
import { MotionPlugin } from '@vueuse/motion'

// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'
import '@quasar/extras/fontawesome-v6/fontawesome-v6.css'

// Import Quasar css
import 'quasar/src/css/index.sass'

import 'animate.css'

// Assumes your root component is App.vue
// and placed in same folder as main.js
import App from './App.vue'

const myApp = createApp(App)

myApp.use(Quasar, {
  plugins: {}, // import Quasar plugins and add here
  iconSet: [ quasarIconSet ]
})

myApp.use(MotionPlugin)

// Assumes you have a <div id="app"></div> in your index.html
myApp.mount('#app')
