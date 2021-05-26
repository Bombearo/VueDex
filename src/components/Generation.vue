<template>
  <div>
    <h1></h1>
    <p v-for="version in game_indices" :key="version">{{version.name}}</p>
  </div>
</template>

<script>
export default {
  name: "Generation",
  data(){
    return{
      pokemon:{},
      game_indices:[]
    }
  },
  props:{
    name:String
  },
  methods: {
    getPokemon(name) {
      const interval = {
        offset: 0,
        limit: 50
      }
      this.dex.getPokemonByName(name).then((response) => {
        this.pokemon = response;
      })
      this.dex.getVersionGroupsList(interval).then((response) => {
        this.game_indices = response.results;
      })
    }
  },


  created() {
    return this.getPokemon(this.name);
  }
}
</script>

<style scoped>

</style>