<template>
  <section class="section">
    <div class="container">
      <draggable
        v-bind="dragOptions"
        :list="l"
        handle=".handle"
        :animation="100"
      >
        <div v-for="(section, i) in sections" :key="i" class="media">
          <div class="media-left">
            <b-icon class="handle" icon="dots-vertical" />
          </div>
          <div class="media-content">
            {{ section }}
          </div>
          <div class="media-right">
            <b-button
              icon-right="close"
              type="is-text"
              @click="remove(section)"
            />
          </div>
        </div>

        <div slot="footer" class="media">
          <div class="media-content is-clipped">
            <div class="buttons">
              <b-button type="is-primary" @click="add">Add section</b-button>
            </div>
          </div>
        </div>
      </draggable>
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
    }
  }
}
</script>
