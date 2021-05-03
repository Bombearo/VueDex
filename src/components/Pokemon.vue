<template>
  <div class="pokemon">
    <li v-for="pokemon in pokemonList" :key="pokemon.name">

      {{ pokemon.name }}
    </li>
  </div>
</template>

<script>
export default {
  name: 'Pokemon',
    data() {
    return {
        pokemonList: [],
    };
    },
  props: {
    start:Number,
    end:Number
  },
  methods:{
    getPokemonList(start,end) {
      //Get the list      
      const Pokedex = require("pokeapi-js-wrapper")
      const P = new Pokedex.Pokedex()

      const interval = {
        offset: start,
        limit: end,
      }
      P.getPokemonsList(interval).then((response) =>{
        
        this.pokemonList = response["results"];
        console.log(response);
      })


    },

  },
    created() {
      return this.getPokemonList(this.start,this.end);
    }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
