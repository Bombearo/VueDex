<template>
  <div class="pokemonDetail">
    <div class="sprite">
        <router-link :to="'/'+pokemonDetail['name']"><img :src="sprite" :alt="pokemonDetail['name']"></router-link>
    </div>
    <div class="name"> <h1>{{pokemonDetail['name']}}</h1></div>
    <div class="pokedex_number">{{pokemonDetail['id']}}</div>
    <div class="abilities">
        <ul>
            <li v-for="ability in abilities" :key="ability.ability">
                {{ability.ability.name}}
            </li>

        </ul>

    </div>
      
  </div>
</template>

<script>
export default {
  name: 'PokemonDetail',
    data() {
    return {
        pokemonDetail:{},
        abilities:{},
        sprite:String
    };
    },
  props: {
    name:String
  },
  methods:{
    getPokemon(name) {
      //Get the list      
      const Pokedex = require("pokeapi-js-wrapper")
      const P = new Pokedex.Pokedex()
      P.getPokemonByName(name).then((response) =>{
        this.pokemonDetail = response;
        let sprite = response['sprites']['front_default']
        this.sprite = sprite;
        let abilities = response['abilities']
        this.abilities = abilities
      })


    },

  },
    created() {
        console.log(this.name)
      return this.getPokemon(this.name);
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

.pokemonDetail{
    display:grid;
    grid-template-areas: "sprite sprite"
    " name id"
    " name ability";
    width:20vw;
    padding: 2vw;
}
@media screen and (max-width:1200px) {
    .pokemonDetail{
    width:40vw;
    padding: 2vw;
}
}
@media screen and (max-width:600px) {
    .pokemonDetail{
    width:100%;
    padding: 2vw;
}
}


.sprite{
    grid-area:sprite;
}

.sprite img{
        width:100%;
}

.name{
    grid-area: name;

}

.pokedex_number{
    grid-area: id;
}

.abilities{
    grid-area: ability;
}

</style>