<template>
  <section class="section">
    <div class="container">
      <item v-for="i in 5" :key="i" :item="i" />
    </div>
  </section>
</template>

<script>
import Item from '~/components/Item'

export default {
  name: 'HomePage',

  components: {
    Item
  }
}
</script>
