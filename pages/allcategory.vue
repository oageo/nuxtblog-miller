<template>
  <div class="m-4">
    <h1 class="title">
      カテゴリ一覧
    </h1>
    <section class="buttons">
      <nuxt-link v-for="(t,index) in $store.state.category" :key="'category-'+index" class="column is-3 button is-medium is-link has-text-centered" :to="'/category/'+t.slug">
        {{ t.text }}
      </nuxt-link>
    </section>
  </div>
</template>

<script>
export default {
  computed: {
    category () {
      return this.$store.state.category
    }
  }
}
</script>
