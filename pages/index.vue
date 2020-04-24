<template>
  <section class="section">
    <div class="container">
      <item v-for="i in 5" :id="i" :key="i" />
    </div>
  </section>
</template>

<script>
import Item from '~/components/Item'

export default {
  components: {
    Item
  }
}
</script>
