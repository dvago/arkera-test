<template>
  <main class="ark-main">
    <table class="ark-main__table">
      <tr class="ark-main__heading">
        <th v-for="(title, index) in heading" :key="`title-${index}`" class="ark-main__title">
          {{ title | cleanTitle}}
        </th>
      </tr>
      <tr v-for="(city, index) in cities" :key="`city-${index}`" class="ark-main__item">
        <td v-for="(info, index) in city" :key="`info-${index}`" class="ark-main__field">
          {{ info }}
        </td>
      </tr>
    </table>
  </main>
</template>

<script>
import data from '@/data/mock.json'

export default {
  name: 'CityTable',
  data () {
    return {
      cities: data,
      heading: Object.keys(data[0])
    }
  },
  filters: {
    cleanTitle: (val) => {
      if (!val) {
        return ''
      }

      return val.replace('-', ' ')
    }
  },
  mounted () {
    this.filterTable()
  },
  watch: {
    /**
     * Watch the route for changes and apply the filterTable logic
     * Since the route loads the same component
     * and Vue prevent the reload of the existing component
    */
    $route (to, from) {
      this.filterTable()
    }
  },
  methods: {
    /**
     * Given the route path
     * Sort Cities based on the path
     * if /city sort the cities using the City key
     * if /100+ sort the cities using the 100m+ key
    */
    filterTable () {
      if (this.$route.path === '/city') {
        this.cities.sort((a, b) => {
          return a.City.localeCompare(b.City)
        })
      } else if (this.$route.path === '/100+') {
        this.cities.sort((a, b) => {
          return a['100m+'] - b['100m+'] // That's because the key shouldn't start with a number
        })
      }
    }
  }
}
</script>

<style lang="scss">
  @import '@/assets/style/_common.scss';

  // Custom vars
  $heading-h: 2em;

  .ark-main {
    padding: $spacing $spacing--lg;
    overflow-x: auto; // Just for small viewports

    &__table {
      width: 100%;
      border-collapse: collapse;
    }

    &__heading {
      height: $heading-h;
      text-align: left;
    }

    &__title {
      padding-left: $spacing;
      color: $cerulean;
    }

    &__item {
      border: 1px solid $mercury;
      transition: .25s ease-in background;

      &:hover,
      &:focus {
        background: lighten($cerulean--light, 50);
        transition: .15s ease-in background;
      }
    }

    &__field {
      padding: $spacing;
    }
  }
</style>
