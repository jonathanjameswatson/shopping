<template>
  <section class="section">
    <div class="container">
      <draggable v-model="sections" handle=".handle" :animation="100">
        <div v-for="(section, i) in sections" :key="i" class="media">
          <div class="media-content is-clipped">
            <b-field grouped>
              <div class="handle">
                <b-icon icon="dots-vertical" size="is-medium" />
              </div>
              <b-input
                :value="section"
                expanded
                rounded
                size="is-medium"
                @input="updateSection($event, i)"
              />
              <b-button
                icon-right="close"
                type="is-text"
                size="is-medium"
                @click="remove(section)"
              />
            </b-field>
          </div>
        </div>
      </draggable>

      <br />
      <div class="buttons">
        <b-button type="is-primary" @click="add">Add section</b-button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    sections: {
      get() {
        return this.$store.state.sections.sections
      },
      set(value) {
        this.$store.commit('sections/update', value)
      }
    }
  },
  methods: {
    add() {
      this.$store.commit('sections/add', '')
    },
    remove(section) {
      this.$store.commit('sections/remove', section)
    },
    updateSection(event, i) {
      this.$store.commit('sections/updateSection', [event, i])
    }
  }
}
</script>
