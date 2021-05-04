<template>
  <div class="pokemonList">
    <PokemonDetail :id ="pokemon.name" :name ="pokemon.name" v-for="pokemon in pokemonList" :key="pokemon.name" />
  </div>
</template>

<script>
import PokemonDetail from './PokemonDetail.vue'
export default {
  
  name: 'PokemonList',
    data() {
    return {
        pokemonList: [],
    };
    },
  props: {
    start:Number,
    end:Number
  },
  components:{
    PokemonDetail
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
        console.log(this.pokemonList);
        this.pokemonList.forEach(element => {
          console.log(element);
        });
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

.pokemonList{
  display:flex;
  flex-wrap: wrap;
}
</style>
