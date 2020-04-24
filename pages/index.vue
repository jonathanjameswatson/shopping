<template>
  <section class="section">
    <div class="container">
      <item v-for="id in itemIds" :id="id" :key="id" />
    </div>
  </section>
</template>

<script>
import Item from '~/components/Item'

export default {
  components: {
    Item
  },
  computed: {
    itemIds() {
      return Object.keys(this.$store.state.items.items)
    }
  }
}
</script>
