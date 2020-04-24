<template>
  <section class="section">
    <div class="container">
      <draggable
        v-bind="dragOptions"
        :list="l"
        handle=".handle"
        :animation="100"
      >
        <div v-for="i in l" :key="i" :item="i" class="media">
          <div class="media-left">
            <b-icon class="handle" icon="dots-vertical" />
          </div>
          <div class="media-content">
            {{ i }}
          </div>
          <div class="media-right">
            <b-button icon-right="close" type="is-text"></b-button>
          </div>
        </div>

        <div slot="footer" class="media">
          <div class="media-content is-clipped">
            <div class="buttons">
              <b-button type="is-primary">Add section</b-button>
            </div>
          </div>
        </div>
      </draggable>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HomePage',

  data() {
    return {
      l: [1, 2, 3, 4, 5]
    }
  }
}
</script>
