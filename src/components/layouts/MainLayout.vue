<script setup lang="ts">
import Header from '@/components/molecules/Header.vue';
</script>

<template>
  <div>
    <Header />
    <main class="px-[10px]">
      <slot />
    </main>
  </div>
</template>

<style scoped lang="scss">

</style>