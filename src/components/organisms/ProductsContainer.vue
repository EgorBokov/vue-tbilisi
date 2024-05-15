<script setup lang="ts">
import Product from '@/components/molecules/Product.vue';
import { useProductsStore } from '@/pinia/productsStore.ts';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';
import { RouterPaths } from '@/router';
import { useCartStore } from '@/pinia/cartStore.ts';
import { ProductType } from '@/utils/types/products';

const { products } = storeToRefs(useProductsStore())
const cartStore = useCartStore();

const { addToCart } = cartStore;
const router = useRouter();

const handleMoveToProductPage = (id: number) => {
  router.push(`${RouterPaths.ProductPage}/${id}`);
};

const handleAddToCart = (product: ProductType) => {
  addToCart(product);
};
</script>

<template>
  <div v-if="products.length > 0" class="flex justify-evenly flex-wrap gap-y-5 gap-x-3">
    <Product
        v-for="item in products"
        :key="item.id"
        :product="item"
        @redirectToProduct="handleMoveToProductPage"
        @addToCart="handleAddToCart(item)"
    />
  </div>
</template>