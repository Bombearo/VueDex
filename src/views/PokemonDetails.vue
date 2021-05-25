<template>
  <div class="home">
    <h1>{{$route.params.name}}</h1>
    <PokemonDetail :id ="$route.params.name" :name ="$route.params.name" />
  </div>
</template>

<script>
// @ is an alias to /src
import PokemonDetail from '@/components/PokemonDetail.vue'

export default {
  name: 'PokemonDetails',
  components:{
    PokemonDetail
  }
}
</script>
