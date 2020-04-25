<template>
  <section class="section">
    <div class="container">
      <template v-if="itemIds.length === 0">
        <p class="title">
          Add your first item
        </p>
        <add-items />
      </template>

      <item v-for="id in itemIds" :id="id" :key="id" />

      <template v-if="itemIds.length !== 0">
        <br />
        <b-button type="is-primary" @click="addItems">Add more items</b-button>
      </template>
    </div>
  </section>
</template>

<script>
import Item from '~/components/Item'
import AddItems from '~/components/AddItems.vue'

export default {
  components: {
    Item,
    AddItems
  },
  computed: {
    itemIds() {
      return Object.keys(this.$store.state.items.items)
    }
  },
  methods: {
    addItems() {
      this.$buefy.modal.open({
        parent: this,
        component: AddItems,
        hasModalCard: true
      })
    }
  }
}
</script>
