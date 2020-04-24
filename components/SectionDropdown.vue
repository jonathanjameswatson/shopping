<template>
  <b-dropdown aria-role="list">
    <div
      slot="trigger"
      slot-scope="{ active }"
      class="dropdown-button-container"
    >
      <button class="button is-primary">
        <span>Section</span>
        <b-icon :icon="active ? 'menu-up' : 'menu-down'"></b-icon>
      </button>
    </div>

    <b-dropdown-item aria-role="listitem">Action</b-dropdown-item>
    <b-dropdown-item aria-role="listitem">Another action</b-dropdown-item>
    <b-dropdown-item aria-role="listitem">Something else</b-dropdown-item>
  </b-dropdown>
</template>

<script>
export default {
  props: {
    item: {
      type: Number,
      required: true
    }
  }
}
</script>
