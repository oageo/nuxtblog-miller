<template>
  <div>
    <millermenu />
    <Nuxt />
    <millerfooter />
  </div>
</template>

<script>
import millermedia from './millermedia.vue'

export default {
  components: {
    // eslint-disable-next-line vue/no-unused-components
    millermedia
  }
}
</script>

<style>
@import "node_modules\bulma\css\bulma.min.css";
</style>
