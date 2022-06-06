<template>
  <div>
    <p>
      カテゴリ: {{ this.$route.params.slug }}が含まれている記事は{{ count }}件見つかりました。
    </p>
    <div v-for="a in content" :key="a.date" class="m-4">
      <nuxt-link :to="'../articles/'+ a.slug">
        <h2 class="title">
          {{ a.title }}
        </h2>
        <p class="subtitle">
          {{ a.date }}
        </p>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData ({ store, $content, params }) {
    const count = await $content({ deep: true }).only('title','category').where({ category: { $contains: params.slug } }).fetch()

    const content = await $content({ deep: true })
      .only(['title', 'description', 'thumbnail', 'path', 'category', 'tag', 'updatedAt', 'series', 'index'])
      .sortBy('date', 'desc')
      .where({ category: { $contains: params.slug } })
      .skip(0).limit(100)
      .fetch()

    return {
      content,
      count: count.length
    }
  }
}
</script>
