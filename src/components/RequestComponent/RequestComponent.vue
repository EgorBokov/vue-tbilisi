<script setup lang="ts">
import { APIStoreInstance } from '@/utils/http/requetsInstance.ts';

const handleRequest = async () => {
  try {
    const response = await APIStoreInstance.send('/categories', 'GET')
    const productsResponse = await APIStoreInstance.send('/products', 'GET')

    console.log({ response, productsResponse })
  } catch(error) {
    console.log({ error })
  }
}

</script>

<template>
  <div>
    <button @click="handleRequest">Request</button>
  </div>
</template>

<style scoped lang="scss">

</style>