<template>
  <main class="ark-notfound">
    <div class="ark-notfound__wrap">
      <h1 class="ark-notfound__title">404</h1>
      <p class="ark-notfound__copy">
        Hey man! The page you are looking for doesn't exist on this planet.
      </p>
      <router-link :to="{ name: 'Cities' }" class="ark-notfound__link">Back to home</router-link>
    </div>
  </main>
</template>

<script>
export default {
  name: 'PageNotFound'
}
</script>

<style lang="scss">
  @import '@/assets/style/_common.scss';

  // Custom vars
  $main-size: calc(100vh - #{$header-h + $footer-h});
  .ark-notfound {
    min-height: $main-size;
    text-align: center;
    padding: $spacing;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-content: stretch;
    align-items: center;

    &__wrap {
      order: 0;
      flex: 0 1 auto;
      align-self: auto;
    }
    &__title {
      margin: 0;
      font-size: $font-size--lg;
      color: $cerulean;
    }

    &__copy {
      color: $swamp;
    }

    &__link {
      color: $cerulean--light;
      transition: .25s ease-in color;

      &:hover {
        color: $cerulean--dark;
        transition: .25s ease-in color;
      }
    }
  }
</style>
