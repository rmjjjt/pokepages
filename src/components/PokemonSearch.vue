<template>
  <div class="hello">
    <p>Here, you can search for any of the Pokemon you could find in Pokéland:</p>
    <b-col md="4" style="margin: auto;">
      <b-form-input v-model="searchText" placeholder="Start typing a Pokemon's name"></b-form-input>
    </b-col>
    <b-row cols="8">
      <b-card v-for="pokemon in foundPokemon" :key="pokemon.name"
        tag="article"
        style="margin: 20px auto; max-width: 20rem;"
        class="mb-2"
      >
        <router-link :to="'\/pokemon\/' + pokemon.name">{{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}}</router-link>
      </b-card>
    </b-row>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Pokemon',
  data () {
    return {
      pokemonList: [],
      foundPokemon: [],
      searchText: ''
    }
  },
  watch: {
    searchText: function (val) {
      this.filterList(val)
    }
  },
  methods: {
    loadAxios: function async () {
      axios.get('https://pokeapi.co/api/v2/pokemon-species/?limit=1000&offset=0')
        .then(function (response) {
          this.pokemonList = response.data.results
        }.bind(this))
        .catch(function (error) {
          this.axiosError = error
        }.bind(this))
    },
    filterList: function (searchText) {
      let filteredList = this.pokemonList.filter(pokemon => pokemon.name.startsWith(searchText))
      this.foundPokemon = filteredList.sort((a, b) => a.name.localeCompare(b.name))
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
