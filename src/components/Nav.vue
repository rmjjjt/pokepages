<template>
  <div>
    <router-link :to="{ path: '/'}" class="router-link" exact>Home</router-link>
    <router-link :to="{ path: '/types'}" class="router-link" exact>Types</router-link>
    <router-link :to="{ path: '/eggs'}" class="router-link" exact>Eggs</router-link>
    <router-link :to="{ path: '/pokemon'}" class="router-link" exact>Search</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Nav'
}
</script>

<style scoped>
.router-link {
  font-family: 'PokemonSolid', sans-serif;
  font-size: 3rem;
  margin: 0 10px 0 10px;
  color: #FFCB05;
}
</style>
