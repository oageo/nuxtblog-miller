/* eslint-disable vue/no-multiple-template-root */
<template>
  <div class="m-4">
    <h1 class="title">
      Error code: {{ error.statusCode }}
    </h1>
    <p class="subtitle">
      Message: {{ error.message }}
    </p>
  </div>
</template>

<script>
export default {
  layout: 'error',
  // eslint-disable-next-line vue/require-prop-types
  props: ['error']
}
</script>

<style>
@import url(https://cdnjs.cloudflare.com/ajax/libs/bulma/0.9.3/css/bulma.min.css);
</style>
