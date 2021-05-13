<template>
  <div class="pokemonList">
    <PokemonDetail :id ="pokemon.name" :name ="pokemon.name" v-for="pokemon in pokemonList" :key="pokemon.name"/>
  </div>
</template>

<script>
import PokemonDetail from './PokemonDetail.vue'
export default {
  
  name: 'PokemonList',
    data() {
    return {
        pokemonList: []
    };
    },
  props: {
    start:Number,
    num_pokemon:Number
  },
  components:{
    PokemonDetail
  },
  methods:{
    getPokemonList(start,end) {
      //Get the list      
      const interval = {
        offset: start,
        limit: end
      }
      console.log(this.dex)
      this.dex.getPokemonsList(interval).then((response) =>{
        
        this.pokemonList = response["results"];
      })


    }

  },
    created() {
      return this.getPokemonList(this.start,this.num_pokemon);
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
