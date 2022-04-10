<template>
  <div class="videoyt milleryt">
    <iframe :src="'https://youtube.com/embed/' + ytvid" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" loading="lazy">
      <div>
        <p>
          milleryt.vue: something broken.
        </p>
        <ul>
          <li>
            ytvid: {{ ytvid }}
          </li>
          <li>
            Please access to <a :href="'https://www.youtube.com/watch?=' + ytvid">youtube.com</a>
          </li>
        </ul>
      </div>
    </iframe>
  </div>
</template>

<script>
let ytvid
export default {
  props: [ytvid]
}
</script>

<style>
@import "node_modules\bulma\css\bulma.min.css";
</style>
