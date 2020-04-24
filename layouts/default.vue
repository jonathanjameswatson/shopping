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
        <b-navbar-item @click="addItems">
          Add items
        </b-navbar-item>
        <b-navbar-item tag="nuxt-link" to="/sections">
          Edit sections
        </b-navbar-item>
      </template>
    </b-navbar>

    <nuxt />
  </div>
</template>

<script>
import AddItems from '~/components/AddItems.vue'

export default {
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
