<template>
  <div class="home">
    <h1>{{$route.params.name}}</h1>
    <Pokemon :id ="$route.params.name" :name ="$route.params.name" class="condensedDetails"/>
    <PokeStats :name ="$route.params.name"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Pokemon from '@/components/Pokemon.vue'
import PokeStats from '@/components/PokeStats.vue'

export default {
  name: 'PokemonDetails',
  components:{
    Pokemon,
    PokeStats
  }
}
</script>

<style scoped>
.home{
  width:80vw;
  margin: auto;
}
.condensedDetails{
  float:left
}


</style>