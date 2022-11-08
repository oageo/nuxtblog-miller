<template>
  <main>
    <ContentDoc :path="$route.path">
      <template v-slot="{ articles }">  
        <h1>{{ articles.title }}</h1>
        <ContentRenderer :value="articles" />
      </template>
    </ContentDoc>
  </main>
</template>
