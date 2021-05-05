<template>
  <div>
    <div v-for="a in articles" :key="a.slug">
      <nuxt-link :to="'/articles/'+ a.slug">
        <h1 class="title">
          {{ a.title }}
        </h1>
        {{ a.date }}
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const query = await $content('articles' || 'index').limit(10)
    const articles = await query.fetch()
    return { articles }
  }
}
</script>

<style>
@import "node_modules\bulma\css\bulma.css";
</style>
