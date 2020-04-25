<template>
  <section class="section">
    <div class="container">
      <p v-if="sections.length === 0" class="title">
        Click the button below to add a section.
      </p>
      <draggable v-model="sections" handle=".handle" :animation="100">
        <div v-for="section in sections" :key="section.id" class="media">
          <div class="media-content is-clipped">
            <b-field grouped>
              <div class="handle">
                <b-icon icon="dots-vertical" size="is-medium" />
              </div>
              <b-input
                :value="section.section"
                expanded
                rounded
                size="is-medium"
                @input="updateSection($event, section.id)"
              />
              <b-button
                icon-right="close"
                type="is-text"
                size="is-medium"
                @click="remove(section.id)"
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
        this.$store.commit('sections/updateAll', value)
      }
    }
  },
  methods: {
    add() {
      this.$store.commit('sections/add', '')
    },
    remove(id) {
      this.$store.commit('sections/remove', id)
    },
    updateSection(event, id) {
      this.$store.commit('sections/updateSection', { id, section: event })
    }
  }
}
</script>
