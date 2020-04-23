<template>
  <div class="media">
    <div class="media-left">
      <div class="field">
        <b-checkbox v-model="checked" size="is-large" />
      </div>
    </div>
    <div class="media-content is-size-4">
      {{ name }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    editMode: {
      type: Boolean,
      required: false,
      default: false
    },
    name: {
      type: String,
      required: true
    },
    section: {
      type: String,
      required: true
    },
    checked: {
      type: Boolean,
      required: true
    }
  }
}
</script>
