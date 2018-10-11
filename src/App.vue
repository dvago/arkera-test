<template>
  <div id="app">
    <ark-header/>
    <router-view/>
    <ark-footer/>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
  name: 'App',
  components: {
    'ark-header': Header,
    'ark-footer': Footer
  }
}
</script>
