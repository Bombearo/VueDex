import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


const app = createApp(App)
const Pokedex = require("pokeapi-js-wrapper")


const P = new Pokedex.Pokedex()
app.config.globalProperties.dex = P
app.use(router).mount('#app')

