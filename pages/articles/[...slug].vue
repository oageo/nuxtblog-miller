<template>
  <div class="has-background-grey-darker has-text-white">
    <main class="columns is-centered is-flex-wrap-wrap">
      <div class="column is-8 m-4">
        <div class="content">
          <ContentDoc />
        </div>
      </div>
      <div class="column is-3 m-2">
        <div class="box">
          <p class="is-centered">
            Writer
          </p>
          <p class="has-text-centered subtitle is-4">
            {{ articles }}
          </p>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
const { path } = useRoute()
const { articles } = await useAsyncData(`content-${path}`, () => {
  return queryContent(`articles`).where({_path: path}).findOne()
})
</script>

<style>
.content a {
  color: hsl(217, 71%, 75%)
}
.content a:hover {
  color: hsl(219, 70%, 96%)
}
.content strong h5 h6 {
  color: hsl(219, 70%, 100%)
}
</style>
