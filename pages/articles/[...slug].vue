<template>
  <div class="has-background-grey-darker has-background-white">
    <main class="columns is-centered is-flex-wrap-wrap">
      <div class="column is-8 m-4">
        <div class="content">
          <ContentDoc />
        </div>
      </div>
      <div class="column is-4 m-2">
        <div class="box">
          <p class="is-centered">
            Writer
          </p>
          <p class="has-text-centered subtitle is-4">
            <!-- {{ articles.author }} -->
          </p>
        </div>
      </div>
    </main>
  </div>
</template>

<style>
.nuxt-content a {
  color: hsl(217, 71%, 60%)
}
.nuxt-content {
  color: hsl(0, 0%, 100%);
}
</style>
