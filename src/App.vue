<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <Pokemon/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Pokemon from './components/Pokemon.vue'

const Pokedex = require("pokeapi-js-wrapper")
const P = new Pokedex.Pokedex()
const interval = {
  offset: 34,
  limit: 10,
}
P.getPokemonsList(interval).then(function(response) {
  console.log(response)
})

export default {
  name: 'App',
  components: {
    HelloWorld,
    Pokemon
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
