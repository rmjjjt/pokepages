<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>Here are all of the types you could find in Pokéland:</p>
    <b-row cols="6">
        <b-card no-body
                v-for="type in types" :key="type.name" :title="type.name"
        >
          <b-card-img :src="require('@/assets/pokeball.png')" alt="Pokeball" top></b-card-img>
          <router-link :to="'\/type\/' + type.name">{{type.name.charAt(0).toUpperCase() + type.name.slice(1)}}</router-link>
        </b-card>
    </b-row>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Types',
  data () {
    return {
      msg: 'Look at all the different types of pokemon there are! Click on a type to see more information about it.',
      types: []
    }
  },
  methods: {
    loadAxios: function async () {
      axios.get('https://pokeapi.co/api/v2/type')
        .then(function (response) {
          this.types = response.data.results.sort((a, b) => a.name.localeCompare(b.name))
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
