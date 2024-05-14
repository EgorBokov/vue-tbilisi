<script setup lang="ts">
import Header from '@/components/molecules/Header.vue';
</script>

<template>
  <div>
    <Header />
    <main >
      <slot />
    </main>

  </div>
</template>

<style scoped lang="scss">

</style>