<script>
export default {
    async asyncData({ store,$content, params }) {
        const count = await $content({ deep: true }).only('title').where({ tag:{ $contains:params.slug}}).fetch();

        const content = await $content({ deep: true })
        .only(['title','description','thumbnail','path','category','tag','updatedAt','series','index'])
        .sortBy('createdAt', 'desc')
        .where({tag:{ $contains:params.slug}}) // ここ
        .skip(0).limit(store.state.indexPerPage)
        .fetch();

        return {
        content,
        count:count.length
        }
    },
}
</script>