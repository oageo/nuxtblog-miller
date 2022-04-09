<template>
  <div class="videoyt milleryt">
      <iframe :src="'https://youtube.com/embed/' + ytvid" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" loading=lazy>
        milleryt.vue: something broken
      </iframe>
  </div>
</template>

<style>
@import "node_modules\bulma\css\bulma.min.css";
</style>

<script>
let ytvid
export default {
  props: [ytvid]
}
</script>
