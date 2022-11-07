<template>
  <div>
    <ContentList path="/articles" v-slot="{ list }">
      <a v-for="article in list" :key="article._path">
        <h2>{{ article.title }}</h2>
        <p>{{ article.description }}</p>
      </a>
    </ContentList>
  </div>
</template>

<script setup lang="ts">
import type { QueryBuilderParams } from "@nuxt/content/dist/runtime/types";
const query: QueryBuilderParams = {
  path: "/articles",
  limit: 5,
  sort: { date: -1 },
};
</script>
