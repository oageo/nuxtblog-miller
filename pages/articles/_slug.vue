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
    <main class="columns flex-wrap">
      <div class="column is-8 m-4">
        <nuxt-content :document="articles" />
      </div>
      <div class="column is-4 m-4">
        <div class="box">
          <p class="is-centered">
            Writer
          </p>
          <p class="has-text-centered subtitle is-4">
            {{ articles.author }}
          </p>
        </div>
        <div class="box">
          <p>
            Created: {{ articles.createdAt }}
          </p>
          <p>
            Last Updated: {{ articles.updatedAt }}
          </p>
        </div>
      </div>
    </main>
  </article>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const articles = await $content('articles', params.slug).fetch()
    return { articles }
  },
  head () {
    return {
      title: this.articles.title,
      titleTemplate: '%s'
    }
  }
}
</script>

<style scoped>
@import "node_modules\bulma\css\bulma.min.css";

.nuxt-content h2{
  font-size: 2rem;
}
</style>
