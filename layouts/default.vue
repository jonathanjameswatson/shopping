<template>
  <div>
    <b-navbar wrapper-class="container" spaced>
      <template slot="brand">
        <b-navbar-item tag="nuxt-link" to="/items">
          <h1 class="title is-size-5 has-text-primary">shopping app</h1>
        </b-navbar-item>
      </template>
      <template v-if="$auth.loggedIn">
        <template slot="start">
          <b-navbar-item tag="nuxt-link" to="/items">
            Shopping list
          </b-navbar-item>
          <b-navbar-item @click="addItems">
            Add items
          </b-navbar-item>
          <b-navbar-item tag="nuxt-link" to="/sections">
            Edit sections
          </b-navbar-item>
          <b-navbar-item tag="nuxt-link" to="/options">
            Options
          </b-navbar-item>
        </template>
        <template slot="end">
          <b-navbar-item tag="div" class="buttons">
            <b-button type="is-primary" @click="save">
              Save list
            </b-button>
            <b-button type="is-primary" @click="load">
              Load list
            </b-button>
          </b-navbar-item>
        </template>
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
    },
    save() {
      this.$buefy.dialog.confirm({
        message:
          'Would you like to upload your items and sections to the server?',
        onConfirm: () => this.$store.dispatch('save')
      })
    },
    load() {
      this.$buefy.dialog.confirm({
        message:
          'Would you like to load the latest items and sections from the server?',
        onConfirm: () => this.$store.dispatch('load')
      })
    }
  }
}
</script>
