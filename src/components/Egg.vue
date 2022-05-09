<template>
  <div class="hello">
    <h1>Here's some info about {{$route.params.id}} type eggs:</h1>
    <p>In English, this egg type is called {{$route.params.id}}. You could also call
      it: <span v-for="name in egg.names" :key="name.name">{{name.name}} ({{name.language.name}})
        , </span>but we'll stick with English for now!
    </p>
    <p>There are {{egg.pokemon_species.length}} types of pokemon that can be found in {{$route.params.id}} type eggs. They are:</p>
    <ul v-for="pokemon in egg.pokemon_species" :key="pokemon.name">
      <li><router-link :to="'\/pokemon\/' + pokemon.name">{{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}}</router-link></li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Egg',
  data () {
    return {
      egg: {
        pokemon_species: []
      }
    }
  },
  props: ['id'],
  methods: {
    loadAxios: function async () {
      axios.get('https://pokeapi.co/api/v2/egg-group/' + this.$route.params.id)
        .then(function (response) {
          response.data.pokemon_species = response.data.pokemon_species.sort((a, b) => a.name.localeCompare(b.name))
          this.egg = response.data
        }.bind(this))
        .catch(function (error) {
          this.axiosError = error
        }.bind(this))
    }
  },
  created () {
    this.loadAxios()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
