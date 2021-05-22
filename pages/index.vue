<template>
  <div>
    <div v-for="a in articles" :key="a.date" class="m-4">
      <nuxt-link :to="'/articles/'+ a.slug">
        <div>
          <h1 class="title">
            {{ a.title }}
          </h1>
          <p class="subtitle">
            {{ a.date }}
          </p>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const query = await $content('articles' || 'index').sortBy('createdAt', 'desc').limit(10)
    const articles = await query.fetch()
    return { articles }
  },
  computed: {
    reverseItems () {
      return this.articles.slice().reverse()
    }
  }
}
</script>

<style>
@import "node_modules\bulma\css\bulma.min.css";
</style>
