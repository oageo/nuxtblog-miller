<template>
  <article class="is-dark">
    <div class="hero-body is-brack">
      <h1 class="title">
        {{ articles.title }}
      </h1>
      <p class="subtitle">
        {{ articles.description }} / {{ articles.date }}
      </p>
    </div>
    <nuxt-content :document="articles" />
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
