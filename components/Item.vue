<template>
  <div class="media">
    <div class="media-left">
      <div class="field">
        <b-checkbox size="is-large" />
      </div>
    </div>
    <div class="media-content">
      <p class="is-size-5">{{ item }}</p>
    </div>
    <div class="media-right">
      <section-dropdown />
    </div>
  </div>
</template>

<script>
import SectionDropdown from '~/components/SectionDropdown'

export default {
  components: {
    SectionDropdown
  },
  props: {
    item: {
      type: Number,
      required: true
    }
  }
}
</script>
