<script setup lang="ts">
import MainLayout from '@/components/layouts/MainLayout.vue';
import { useCartStore } from '@/pinia/cartStore.ts';
import { storeToRefs } from 'pinia';
import CartContainer from '@/components/organisms/CartContainer.vue';

const cartStore = useCartStore();
const { totalCartAmount } = storeToRefs(cartStore);
</script>

<template>
  <MainLayout>
    <CartContainer v-if="totalCartAmount > 0" />
    <div v-else>Корзина пуста.</div>
  </MainLayout>
</template>

<style scoped lang="scss">

</style>