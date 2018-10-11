import Vue from 'vue'
import Router from 'vue-router'
import CityTable from '@/components/CityTable'
import PageNotFound from '@/components/PageNotFound'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Cities',
      component: CityTable
    },
    {
      path: '/city',
      name: 'CitiesByName',
      component: CityTable
    },
    {
      path: '/100+',
      name: 'CitiesByData',
      component: CityTable
    },
    {
      path: '*',
      component: PageNotFound
    }
  ]
})
