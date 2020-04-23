<template>
  <b-dropdown aria-role="list">
    <button slot="trigger" slot-scope="{ active }" class="button is-primary">
      <span>Section</span>
      <b-icon :icon="active ? 'menu-up' : 'menu-down'"></b-icon>
    </button>

    <b-dropdown-item aria-role="listitem">Action</b-dropdown-item>
    <b-dropdown-item aria-role="listitem">Another action</b-dropdown-item>
    <b-dropdown-item aria-role="listitem">Something else</b-dropdown-item>
  </b-dropdown>
</template>
