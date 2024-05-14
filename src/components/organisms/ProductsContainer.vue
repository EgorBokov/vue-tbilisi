<script setup lang="ts">
import Product from '@/components/molecules/Product.vue';
import { useProductsStore } from '@/pinia/productsStore.ts';
import { storeToRefs } from 'pinia';

const { products } = storeToRefs(useProductsStore())
</script>

<template>
  <div v-if="products.length > 0" class="flex justify-evenly flex-wrap gap-y-5 gap-x-3">
    <Product v-for="item in products" :key="item.id" :product="item" />
  </div>
</template>