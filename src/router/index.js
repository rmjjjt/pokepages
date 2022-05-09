import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Types from '../components/Types'
import Eggs from '../components/Eggs'
import Evolutions from '../components/Evolutions'
import Egg from '../components/Egg'
import Pokemon from '../components/Pokemon'
import Type from '../components/Type'
import PokemonSearch from '../components/PokemonSearch'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/type/:id',
      name: 'Type',
      component: Type
    },
    {
      path: '/types',
      name: 'Types',
      component: Types
    },
    {
      path: '/eggs',
      name: 'Eggs',
      component: Eggs
    },
    {
      path: '/pokemon/',
      name: 'Search',
      component: PokemonSearch
    },
    {
      path: '/pokemon/:id',
      name: 'Pokemon',
      component: Pokemon
    },
    {
      path: '/egg/:id',
      name: 'Egg',
      component: Egg

    },
    {
      path: '/evolutions',
      name: 'Evolutions',
      component: Evolutions
    }
  ]
})
