<template>
  <div loading="lazy" class="lazy block is-centered videoyt milleryt">
    <iframe :src="'https://youtube.com/embed/' + ytvid" loading="lazy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture">
      <div class="milleryterror">
      <p>
      milleryt.vue: something broken.
      </p>
      <ul>
      <li>
      ytvid: {{ ytvid }}
      </li>
      <li>
      Please access to <a :href="'https://www.youtube.com/watch?v=' + ytvid">youtube.com</a>
      </li>
      </ul>
      </div>
    </iframe>
    <p>Direct link of <a :href="'https://www.youtube.com/watch?v=' + ytvid">this video on YouTube</a></p>
  </div>
</template>

<script>
export default defineNuxtConfig({
  props: {
    ytvid: {
      type: String,
      required: true
    }
  }
})
</script>

<style>

</style>
