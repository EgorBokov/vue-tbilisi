<script setup lang="ts">
import { routesForHeader } from '@/router';
import { Button } from '@/components/ui/button';
</script>

<template>
  <nav class="flex items-center gap-1">
    <RouterLink
        v-for="link in routesForHeader"
        :key="link.path"
        :to="link.path"
    >
      <Button variant="ghost">
          {{ link.title }}
      </Button>
    </RouterLink>
  </nav>
</template>

<style scoped lang="scss">

</style>