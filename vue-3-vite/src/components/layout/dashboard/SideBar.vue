<template>
  <div class="menu-list">
    <router-link
      v-for="route in dashboardLayoutRoutes.children"
      :key="route.name"
      class="menu-item"
      active-class="menu-item__active"
      :to="route.name"
    >
      {{ route.name }}
    </router-link>
  </div>
</template>

<script setup>
import dashboardLayoutRoutes from "../../../router/dashboardLayoutRoutes";
</script>

<style lang="scss">
.menu-list {
  .menu-item {
    @apply block bg-slate-400 ;
    &__active {
      @apply text-red-500
    }
  }
}
</style>
