import { nanoid } from 'nanoid'

export const state = () => ({
  items: {}
})

export const mutations = {
  add(state, name) {
    const id = nanoid(10)
    state.items[id] = {
      name,
      section: null
    }
  },
  remove(state, id) {
    delete state.items[id]
  },
  update(state, id, item) {
    state.items[id] = item
  }
}
