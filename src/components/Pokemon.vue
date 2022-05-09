<template>
  <div class="hello">
    <div>
      <b-card
        :title="this.$route.params.id.charAt(0).toUpperCase() + this.$route.params.id.slice(1)"
        :img-src="pokemon.sprites.front_default"
        img-alt="Image"
        img-top
        tag="article"
        style="margin: 20px auto; max-width: 20rem;"
        class="mb-2"
      >
        <b-card-text>
          <ul>
            <li>Type(s): <span v-for="(type, index) in pokemon.types" :key="type.type.name">{{index > 0 ? ', ' : ''}}<router-link :to="'\/type\/' + type.type.name">{{type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1)}}</router-link></span></li>
          </ul>
        </b-card-text>
      </b-card>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Pokemon',
  data () {
    return {
      pokemon: {
        sprites: {
          front_default: ''
        }
      }
    }
  },
  props: ['id'],
  methods: {
    loadAxios: function async () {
      axios.get('https://pokeapi.co/api/v2/pokemon/' + this.$route.params.id)
        .then(function (response) {
          this.pokemon = response.data
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
