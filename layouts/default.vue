<template>
  <div>
    <b-navbar wrapper-class="container" spaced>
      <template slot="brand">
        <b-navbar-item tag="nuxt-link" to="/">
          <h1 class="title is-size-5 has-text-primary">shopping</h1>
        </b-navbar-item>
      </template>
      <template slot="start">
        <b-navbar-item tag="nuxt-link" to="/">
          Shopping list
        </b-navbar-item>
        <b-navbar-item tag="nuxt-link" to="/sections">
          Sections
        </b-navbar-item>
        <b-navbar-item @click="addItem">
          ADD ITEM
        </b-navbar-item>
      </template>
    </b-navbar>

    <nuxt />
  </div>
</template>

<script>
export default {
  methods: {
    addItem() {
      this.$store.commit('items/add', { name: 'Apple', section: null })
    }
  }
}
</script>
