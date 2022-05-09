<template>
  <div class="hello">
    <h1>Here's some info about {{type.name}} type:</h1>
    <p>There are {{type.pokemon.length}} of this type of pokemon. They are:</p>
    <ul v-for="mon in type.pokemon" :key="mon.pokemon.name">
      <li><router-link :to="'\/pokemon\/' + mon.pokemon.name">{{mon.pokemon.name.charAt(0).toUpperCase() + mon.pokemon.name.slice(1)}}</router-link></li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Type',
  data () {
    return {
      type: {
        pokemon: []
      }
    }
  },
  props: ['id'],
  methods: {
    loadAxios: function async () {
      axios.get('https://pokeapi.co/api/v2/type/' + this.$route.params.id)
        .then(function (response) {
          response.data.pokemon = response.data.pokemon.sort((a, b) => a.pokemon.name.localeCompare(b.pokemon.name))
          this.type = response.data
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
