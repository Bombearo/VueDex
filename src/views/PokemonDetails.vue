<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
      <PokemonList v-bind:start="0" v-bind:num_pokemon="60" />
  </div>
</template>

<script>
// @ is an alias to /src

import PokemonList from '@/components/PokemonList.vue'

export default {
  name: 'PokemonDetails',
  components: {
    PokemonList
  }
}
</script>
