<template>
  <div>
    <h1></h1>
    <p>{{stats}}</p>
  </div>
</template>

<script>
export default {
  name: "PokeStats",
  data(){
    return{
      stats:{},
      evs:{},
      eggGroups:{},
      captureRate:0,
      base_happiness:0,
      evolutions:{},
      flavourText:{}

    }
  },
  props:{
    name:String
  },
  methods: {
    getStats(name) {
      let {hp,attack,defense,spAttack,spDefense,speed} = ''
      this.dex.getPokemonByName(name).then((response) => {
        response.stats.map(stat => {
              switch (stat.stat.name) {
                case "hp":
                  hp = stat['base_stat'];
                  break;
                case "attack":
                  attack = stat['base_stat'];
                  break;
                case "defense":
                  defense = stat['base_stat'];
                  break;
                case "special-attack":
                  spAttack = stat['base_stat'];
                  break;
                case "special-defense":
                  spDefense = stat['base_stat'];
                  break;
                case "speed":
                  speed = stat['base_stat'];
                  break;


              }
            }
        )
        this.stats = {hp,attack,defense,spAttack,spDefense,speed}

        this.evs = response.stats.filter(stat=>{
          return stat.effort > 0}).map(stat=>{
          return this.uppercase(`${stat.effort} ${stat.stat.name}`)
        })
            .join(', ')
          }
      )


    },
    getPokemon(name) {
      this.getStats(name)
      this.getSpeciesDetails(name)
    },
    uppercase(name){
      return name.toLowerCase()
      .split('-')
      .map(s =>s.charAt(0).toUpperCase() + s.substring(1))
      .join(' ')
    },
    getSpeciesDetails(name) {
      let evoChain = ''
      this.dex.getPokemonSpeciesByName(name).then(response=>{
        this.flavourText = response.flavor_text_entries.filter(text=>{
        return text.language.name === 'en'}
        ).map(version=>{
          return {"versionName":version.version.name,"flavourText":version.flavor_text}
        })
        evoChain = response.evolution_chain.url
        if (evoChain){
          this.dex.resource(evoChain).then(response=>{
            if (response.chain.evolves_to.length > 0){
              console.log(response)
            }
          })
        }
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