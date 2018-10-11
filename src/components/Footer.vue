<template>
  <footer class="ark-footer">
    <hr class="ark-footer__divider">
    <p class="ark-footer__copy">&copy; Davide Vago 2018</p>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="scss">
  @import '@/assets/style/_common.scss';

  .ark-footer {
    padding: $spacing;

    &__divider {
      border: 1px solid $mercury;
      border-bottom: none;
    }

    &__copy {
      padding: $spacing--sm;
      text-align: center;
      font-size: $font-size--sm;
      color: darken($mercury, 20);
    }
  }
</style>
