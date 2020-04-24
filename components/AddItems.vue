<template>
  <div class="modal-card add-items-outline" style="width: auto">
    <div class="modal-card-body">
      <b-field label="Item name">
        <b-input v-model="name" />
      </b-field>
      <b-field label="Section">
        <section-dropdown v-model="section" @close="$parent.close()" />
      </b-field>
      <hr />
      <b-button type="is-primary" @click="addItem">Add item</b-button>
    </div>
  </div>
</template>

<script>
import SectionDropdown from '~/components/SectionDropdown.vue'

export default {
  components: {
    SectionDropdown
  },
  data() {
    return {
      name: '',
      section: null
    }
  },
  methods: {
    addItem() {
      this.$store.commit('items/add', {
        name: this.name,
        section: this.section
      })
    }
  }
}
</script>
