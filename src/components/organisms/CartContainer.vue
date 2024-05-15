<script setup lang="ts">
import { useRouter } from 'vue-router';
import { storeToRefs } from 'pinia';
import CartProductView from '@/components/molecules/CartProductView.vue';
import { useCartStore } from '@/pinia/cartStore.ts';
import { RouterPaths } from '@/router';

const router = useRouter()
const cartStore = useCartStore();
const { cart } = storeToRefs(cartStore);
const { removeFromCart } = cartStore;

const redirectToProduct = (id: number) => {
  router.push(`${RouterPaths.ProductPage}/${id}`);
};

</script>

<template>
  <div class="flex items-center gap-3 flex-wrap px-[20px] py-[10px]">
    <CartProductView
        class="w-[30%]"
        v-for="item in cart"
        :key="item.id"
        :product="item"
        @removeFromCart="removeFromCart"
        @redirectToProduct="redirectToProduct"
    />
  </div>
</template>

<style scoped lang="scss">

</style>