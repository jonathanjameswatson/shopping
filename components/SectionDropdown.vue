<template>
  <b-dropdown v-model="chosenSection" aria-role="list" @input="sectionChange">
    <div
      slot="trigger"
      slot-scope="{ active }"
      class="dropdown-button-container"
    >
      <button class="button is-primary">
        <span>{{ chosenSection ? chosenSection : 'Pick a section' }}</span>
        <b-icon :icon="active ? 'menu-up' : 'menu-down'"></b-icon>
      </button>
    </div>

    <b-dropdown-item
      v-for="(section, i) in sections"
      :key="i"
      :value="section"
      aria-role="listitem"
    >
      {{ section }}
    </b-dropdown-item>

    <b-dropdown-item v-if="sections.length === 0" custom>
      <nuxt-link to="/sections">Add some sections</nuxt-link>
    </b-dropdown-item>
  </b-dropdown>
</template>

<script>
export default {
  prop: {
    value: {
      type: String,
      required: false,
      default: null
    }
  },
  data() {
    return {
      chosenSection: this.value
    }
  },
  computed: {
    sections() {
      return this.$store.state.sections.sections
    }
  },
  methods: {
    sectionChange(section) {
      this.$emit('input', section)
    }
  }
}
</script>
