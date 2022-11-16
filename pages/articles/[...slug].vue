<template>
  <div class="has-background-grey-darker has-text-white">
    <section class="hero is-small has-background-black-bis">
        <div class="hero-body">
          <h1 class="title">
            {{ articles }}
          </h1>
        </div>
    </section>
    <main class="columns is-centered is-flex-wrap-wrap">
      <section class="column is-8 m-4">
        <div class="content">
          <ContentDoc />
        </div>
      </section>
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
const { articles } = await useAsyncData( () => {
  return queryContent('articles').only('slug').find()
})
</script>

<style>
.content a {
  color: hsl(217, 71%, 75%)
}
.content a:hover {
  color: hsl(219, 70%, 96%)
}
.content strong {
  color: hsl(219, 70%, 100%) !important
}
</style>
