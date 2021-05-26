<template>
  <div class="home">
    <h1>{{$route.params.name}}</h1>
    <PokemonDetail :id ="$route.params.name" :name ="$route.params.name" class="condensedDetails"/>
    <Generation :name ="$route.params.name"/>
  </div>
</template>

<script>
// @ is an alias to /src
import PokemonDetail from '@/components/PokemonDetail.vue'
import Generation from '@/components/Generation.vue'

export default {
  name: 'PokemonDetails',
  components:{
    PokemonDetail,
    Generation
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