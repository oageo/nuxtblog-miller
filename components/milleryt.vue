<template>
  <div class="videoyt">
      <iframe :src="'https://youtube-nocookie.com/embed/' + ytid" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" loading=lazy allowfullscreen>
        milleryt.vue: something broken
      </iframe>
  </div>
</template>

<style>
@import "node_modules\bulma\css\bulma.min.css";
</style>

<script>
export default {
    props: [ytvid]
}
</script>