/* eslint-disable vue/no-multiple-template-root */
<template>
  <h1 class="title is-centered">
    Error code: {{ error.statusCode }} / Message: {{ error.message }}
  </h1>
</template>

<script>
export default {
  // eslint-disable-next-line vue/require-prop-types
  props: ['error']
}
</script>

<style>
@import "node_modules\bulma\css\bulma.css";
</style>
