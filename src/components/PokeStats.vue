<template>
  <div>
    <h1></h1>
    <p v-for="version in game_indices" :key="version">{{version.name}}</p>
    <p>{{hp}}</p>
  </div>
</template>

<script>
export default {
  name: "PokeStats",
  data(){
    return{
      pokemon:{},
      game_indices:[],
      hp:0,
      attack:0,
      defense:0,
      spAttack:0,
      spDefense:0,
      speed:0

    }
  },
  props:{
    name:String
  },
  methods: {
    getPokemon(name) {
      this.dex.getPokemonByName(name).then((response) => {
        this.pokemon = response;
        console.log(response)
        response.stats.map(stat=>{
          switch(stat.stat.name){
            case "hp":
              this.hp = stat['base_stat'];
              break;
            case "attack":
              this.attack = stat.base_stat;
              break;
            case "defense":
              this.defense = stat.base_stat;
              break;
            case "special-attack":
              this.spAttack = stat.base_stat;
              break;
            case "special-defense":
              this.spDefense = stat.base_stat;
              break;
            case "speed":
              this.speed = stat.base_stat;
              break;


        }
        }
        )
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