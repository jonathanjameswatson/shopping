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
      type: Number,
      required: true
    }
  },
  data() {
    return {
      name: 'Apple',
      checked: false
    }
  },
  computed: {
    lineThrough() {
      if (this.checked) {
        return { 'text-decoration': 'line-through' }
      }
      return {}
    }
  }
}
</script>
