import { nanoid } from 'nanoid'
import Vue from 'vue'

export const state = () => ({
  items: {}
})

export const mutations = {
  add(state, { name, section }) {
    const id = nanoid(10)
    Vue.set(state.items, id, {
      name,
      section,
      checked: false
    })
  },
  setChecked(state, { id, checked }) {
    Vue.set(state.items[id], 'checked', checked)
  },
  remove(state, id) {
    Vue.delete(state.items, id)
  },
  removeAll(state) {
    state.items = {}
  },
  update(state, id, item) {
    Vue.set(state.items, id, item)
  }
}
