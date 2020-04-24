<template>
  <div class="media">
    <div class="media-left">
      <p class="checkbox-container">
        <b-checkbox v-model="checked" size="is-large" />
      </p>
    </div>
    <div class="media-content">
      <span class="is-size-4" :style="lineThrough">{{ name }}</span>
    </div>
    <div class="media-right">
      <b-button type="is-primary">Edit</b-button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true
    }
  },
  computed: {
    name() {
      return this.$store.state.items.items[this.id].name
    },
    checked: {
      get() {
        return this.$store.state.items.items[this.id].checked
      },
      set(value) {
        this.$store.commit('items/setChecked', { id: this.id, checked: value })
      }
    },
    lineThrough() {
      if (this.checked) {
        return { 'text-decoration': 'line-through' }
      }
      return {}
    }
  }
}
</script>
