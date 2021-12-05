import taxonomy from '../taxonomy.js'

export const state = () => ({
  category: [
    ...taxonomy.category
  ]
})

export const getters = {
  getCategoryTextBySlug (state) {
    return (slug) => {
      const idx = state.category.findIndex((tag) => {
        return tag.slug === slug
      })
      return (idx > -1) ? state.category[idx].text : undefined
    }
  }
}
