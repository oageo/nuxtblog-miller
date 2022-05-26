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
    <main class="columns is-centered flex-wrap">
      <div class="column is-8 m-4">
        <div class="content">
          <nuxt-content :document="articles" />
        </div>
        <section class="columns box">
          <div v-if="prev" class="column">
            <p>
              前の記事
            </p>
            <nuxt-link :to="`/articles/${prev.slug}/`" class="page-nav__link">
              {{ prev.title }}
            </nuxt-link>
          </div>
          <div v-if="next" class="column">
            <p>
              次の記事
            </p>
            <nuxt-link :to="`/articles/${next.slug}/`" class="page-nav__link">
              {{ next.title }}
            </nuxt-link>
          </div>
        </section>
      </div>
      <div class="column is-3 m-2">
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
        <div class="box">
          <p>
            Category
          </p>
          <nuxt-link class="" v-for="(t,index) in $store.state.category" :key="'category-'+index" :to="'/category/'+t">
            
          </nuxt-link>
        </div>
        <div v-if="articles.license !== ''">
          <millerlicense :license="articles.license"></millerlicense>
        </div>
      </div>
    </main>
  </article>
</template>

<script>
import millerlicense from '~/components/millerlicense.vue'
let ytvid
let license
export default {
  components: { millerlicense },
  async asyncData ({ $content, params }) {
    const articles = await $content('articles', params.slug).fetch()
    const [prev, next] = await $content('articles').only(['title', 'slug']).sortBy('date', 'asc').surround(params.slug).fetch()
    // const categories = await $content('category').only(['name', 'slug']).where({ name: { $containsAny: articles.category } }).limit(1).fetch()
    return { articles, prev, next }
  },
  data () {
    return {
      ytvid,
      license
    }
  },
  head () {
    return {
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.articles.description
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.articles.description
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.articles.title
        }
      ],
      title: this.articles.title,
      titleTemplate: '%s'
    }
  }
}
</script>

<style>
.nuxt-content h2, .nuxt-content h3, .nuxt-content h4, .nuxt-content h5, .nuxt-content h6, .nuxt-content strong{
  color: #ffffff;
}
.nuxt-content a:hover {
  color: hsl(219, 70%, 96%)
}
.nuxt-content img{
  max-width: 100%;
}
</style>
