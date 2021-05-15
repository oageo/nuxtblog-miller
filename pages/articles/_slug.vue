/* eslint-disable vue/no-multiple-template-root */
<template>
  <article class="has-background-dark has-text-white">
    <section class="hero is-black">
      <div class="hero-body">
        <h1 class="title">
          {{ articles.title }}
        </h1>
        <p class="subtitle">
          {{ articles.description }} / {{ articles.date }}
        </p>
      </div>
    </section>
    <main class="columns">
      <div class="column is-8">
        <nuxt-content :document="articles" />
      </div>
    </main>
  </article>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const articles = await $content('articles', params.slug).fetch()
    return { articles }
  }
}
</script>

<style>
@import "node_modules\bulma\css\bulma.css";
</style>
