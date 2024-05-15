<script setup lang="ts">
import { ref } from 'vue';

import type { ProductType } from '@/utils/types/products';
import { Banknote } from 'lucide-vue-next';
import { Button } from '@/components/ui/button';
import { useCartStore } from '@/pinia/cartStore.ts';

const cartStore = useCartStore();
const { addToCart } = cartStore;

const { product } = defineProps<{ product: ProductType }>();
const isProductAdded = ref(false);

const handleOnBuyAttempt = () => {
  addToCart(product);
  isProductAdded.value = true;
};
</script>

<template>
  <div class="flex p-[20px] gap-5">
    <div class="max-w-[30%]">
      <img :src="product.imageUrl" alt="Image" />
    </div>
    <div class="w-full flex flex-col max-w-[850px]">
      <div class="flex flex-col">
        <p class="font-bold text-2xl">{{ product.name }}</p>
        <p class="font-bold text-gray-700">{{ product.defaultDisplayedPriceFormatted }}</p>
        <p v-html="product.description" />
      </div>
      <Button class="mt-2 flex items-center gap-2.5" @click="handleOnBuyAttempt">
        <Banknote />
        Buy
      </Button>
    </div>
  </div>
</template>