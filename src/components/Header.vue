<template>
  <header class="ark-header">
    <nav>
      <ul class="ark-header__nav">
        <li class="ark-header__item">
          <router-link :to="{ name: 'CitiesByName' }" class="ark-header__link">Sort by City name</router-link>
        </li>
        <li class="ark-header__item">
          <router-link :to="{ name: 'CitiesByData' }" class="ark-header__link"> Sort by 100m+ data</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="scss">
  @import '@/assets/style/_common.scss';

  .ark-header {
    height: $header-h;
    background: $swamp;

    &__nav {
      padding: 0;
      margin: 0;
      list-style: none;
      text-align: center;
    }

    &__item {
      display: inline-block;
      padding: $spacing $spacing--sm;

      @media (min-width: $screen-sm) {
        padding: $spacing;
      }
    }

    &__link {
      display: block;
      background: $white;
      padding: $spacing--sm $spacing;
      border-radius: $border-radius;
      text-decoration: none;
      color: $cerulean--light;
      font-size: $font-size--sm;
      transition: .25s ease-in background, .25s ease-in color;

      &:focus,
      &:hover {
        background: $cerulean--light;
        color: $white;
        transition: .25s ease-in background, .25s ease-in color;
      }

      &:focus:hover {
        background: $cerulean--dark;
        color: white;
        transition: .25s ease-in background, .25s ease-in color;
      }
    }
  }
</style>
