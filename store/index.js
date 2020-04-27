export const actions = {
  async save({ rootState }) {
    await this.$axios.post('api', {
      sections: rootState.sections.sections,
      items: rootState.items.items
    })
  },
  async load({ commit }) {
    const { sections, items } = await this.$axios.$get('api')
    commit('sections/load', sections, { root: true })
    commit('items/load', items, { root: true })
  }
}
