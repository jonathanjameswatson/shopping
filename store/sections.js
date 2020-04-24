export const state = () => ({
  sections: []
})

export const mutations = {
  add(state, section) {
    state.sections.push(section)
  },
  remove(state, section) {
    state.sections.splice(state.sections.indexOf(section), 1)
  },
  update(state, sections) {
    state.sections = sections
  },
  updateSection(state, { section, i }) {
    state.sections[i] = section
  }
}
