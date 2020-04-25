import { nanoid } from 'nanoid'

export const state = () => ({
  sections: []
})

export const mutations = {
  add(state, section) {
    const id = nanoid(10)
    state.sections.push({ id, section })
  },
  remove(state, id) {
    state.sections.splice(
      state.sections.findIndex((section) => section.id === id),
      1
    )
  },
  updateSection(state, { id, section }) {
    state.sections.find((section) => section.id === id).section = section
  },
  updateAll(state, sections) {
    state.sections = sections
  }
}
