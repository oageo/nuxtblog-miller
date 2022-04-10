<template>
  <div class="videoyt milleryt">
      <iframe :src="'https://youtube.com/embed/' + ytvid" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" loading=lazy>
        milleryt.vue: something broken.
        <ul>
          <li>
            ytvid: {{ ytvid }}
          </li>
          <li>
            Please access to <a :href="'https://www.youtube.com/watch?=' + ytvid">youtube.com</a>
          </li>
        </ul>
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
