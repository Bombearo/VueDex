<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>

  <router-view/>
  <footer>Data Grabbed from <a href="https://pokeapi.co" target="_blank">pokeapi.co</a></footer>
</template>

<script>

</script>

<style>

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

</style>
