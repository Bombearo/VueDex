<template>
  <div class="pokemonDetail">
    <div class="sprite">
      <router-link :to="'/pokemon/'+pokemonDetail['name']">
        <img :src="sprite" :alt="pokemonDetail['name']">
      </router-link>
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
  name: 'Pokemon',
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
      this.dex.getPokemonByName(name).then((response) =>{
        this.pokemonDetail = response;
        this.sprite = response['sprites']['front_default']
        this.abilities = response['abilities']
      })


    }
  },
  created() {
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
  width:20%;
  padding: 2%;
  margin:1vw auto;
  border: #42b983 10px solid;
  border-radius: 20%;
}
@media screen and (max-width:1200px) {
  .pokemonDetail{
    width:30vw;
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
  border-right:#42b983 1px dashed;
  padding-right:2vw;
  text-transform: capitalize;
}

.pokedex_number{
  grid-area: id;
}

.abilities{
  grid-area: ability;
}

</style>