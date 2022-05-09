<template>
  <div id="app">
    <a href="/"><img style="width: 50%; margin: auto;" src="./assets/logo.png"></a>
    <br>
    <Nav />
  </div>
</template>

<script>
import Nav from './components/Nav'

export default {
  name: 'App',
  components: {
    Nav
  }
}
</script>

<style>
@font-face {
  font-family: "PokemonSolid";
  src: local("PokemonSolid"), url(./fonts/PokemonSolid.woff) format("truetype");}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 70%;
  margin: auto;
}
</style>
