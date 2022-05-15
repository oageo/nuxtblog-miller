<template>
<div>
    <div v-for="a in articles" :key="a.date" class="m-4">
      
    </div>
  </div>
</template>

<script>
export default {
    async asyncData({ store,$content, params }) {
        const count = await $content({ deep: true }).only('title').where({ category:{ $contains:params.slug}}).fetch();

        const content = await $content({ deep: true })
        .only(['title','description','thumbnail','path','category','tag','updatedAt','series','index'])
        .sortBy('createdAt', 'desc')
        .where({category:{ $contains:params.slug}})
        .skip(0).limit(store.state.indexPerPage)
        .fetch();

        return {
        content,
        count:count.length
        }
    },
}
</script>
