<script setup lang="ts">
import AppFooter from '@/components/AppFooter.vue';
import AppHeader from '@/components/AppHeader.vue';
</script>

<template>
  <div class="layout">
    <AppHeader />
    <main class="page-content">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>

<style scoped lang="scss">
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.page-content {
  flex-grow: 1;
}
</style>
