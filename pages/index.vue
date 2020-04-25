<template>
  <section class="section">
    <div class="container">
      <template v-if="empty">
        <p class="title">
          Add your first item
        </p>
        <add-items />
      </template>

      <item-section
        v-for="section in sectionedItemIds"
        :key="section.section"
        :section="section.section"
        :ids="section.itemIds"
      />

      <template v-if="!empty">
        <br />
        <div class="buttons">
          <b-button type="is-primary" @click="addItems">
            Add more items
          </b-button>
          <b-button type="is-primary" @click="removeAll">
            Remove all items
          </b-button>
        </div>
      </template>
    </div>
  </section>
</template>

<script>
import ItemSection from '~/components/ItemSection.vue'
import AddItems from '~/components/AddItems.vue'

export default {
  components: {
    ItemSection,
    AddItems
  },
  computed: {
    items() {
      return this.$store.state.items.items
    },
    empty() {
      return Object.keys(this.items).length === 0
    },
    sections() {
      return this.$store.state.sections.sections
    },
    sectionedItemIds() {
      const sectionedItemIds = this.sections.map((section) => ({
        section,
        itemIds: []
      }))
      sectionedItemIds.push({ section: 'Uncategorized', itemIds: [] })
      Object.entries(this.items).forEach(([id, item]) => {
        const section = sectionedItemIds.find(
          (section) => section.section === item.section
        )
        if (section) {
          section.itemIds.push(id)
        } else {
          sectionedItemIds[sectionedItemIds.length - 1].itemIds.push(id)
        }
      })
      return sectionedItemIds.filter(({ itemIds }) => itemIds.length !== 0)
    }
  },
  methods: {
    addItems() {
      this.$buefy.modal.open({
        parent: this,
        component: AddItems,
        hasModalCard: true
      })
    },
    removeAll() {
      this.$buefy.dialog.confirm({
        message: 'Are you sure you would like to remove all items?',
        onConfirm: () => this.$store.commit('items/removeAll')
      })
    }
  }
}
</script>
