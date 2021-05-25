<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div class="controls">
      <button v-on:click="next">Next</button>
      <button v-on:click="back">Back</button>
    </div>
    <PokemonList :start="start" :num_pokemon="num"/>
    <div class="controls">
      <button v-on:click="next">Next</button>
      <button v-on:click="back">Back</button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import PokemonList from '@/components/PokemonList.vue'

export default {
  name: 'Home',
  data(){
    return{
      start:0,
      num:60
    }
  },
  components: {
    PokemonList
  },
  methods:{
    next: function(){
      this.start +=60
    },
    back: function(){
      this.start -=60
      if (this.start < 0){
        this.start = 0
      }
    }
  }
}
</script>
