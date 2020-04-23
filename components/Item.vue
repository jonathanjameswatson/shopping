<template>
  <div class="media">
    <div class="media-content">
      <b-field grouped>
        <b-checkbox size="is-large" />
        <b-input v-model="item" expanded rounded size="is-medium" />
        <section-dropdown />
      </b-field>
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
