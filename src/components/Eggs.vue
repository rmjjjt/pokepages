<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>Here are all of the eggs you could find in Pokéland:</p>
    <b-row cols="6">
      <b-card no-body
              v-for="egg in eggs" :key="egg.name"
      >
        <b-card-img :src="require('@/assets/egg.png')" alt="Pokemon Egg" top></b-card-img>
        <router-link :to="'\/egg\/' + egg.name">{{egg.name.charAt(0).toUpperCase() + egg.name.slice(1)}} Egg</router-link>
      </b-card>
    </b-row>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Eggs',
  data () {
    return {
      msg: 'Here\'s some eggs. Don\'t eat them!',
      eggs: []
    }
  },
  methods: {
    loadAxios: function async () {
      axios.get('https://pokeapi.co/api/v2/egg-group')
        .then(function (response) {
          this.eggs = response.data.results.sort((a, b) => a.name.localeCompare(b.name))
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
