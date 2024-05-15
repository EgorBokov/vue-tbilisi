<script setup lang="ts">
import { useRouter } from 'vue-router';
import { storeToRefs } from 'pinia';
import { ShoppingCart } from 'lucide-vue-next';

import CartPayment from '@/components/molecules/CartPayment.vue';
import Navbar from '@/components/molecules/Navbar.vue';
import Badge from '@/components/ui/badge/Badge.vue';
import { Button } from '@/components/ui/button';
import { RouterPaths } from '@/router';
import { useCartStore } from '@/pinia/cartStore.ts';

const router = useRouter();

const cartStore = useCartStore();
const { totalCartAmount } = storeToRefs(cartStore);

const redirectToCartPage = () => {
  router.push(RouterPaths.CartPage)
};

const totalCartAmountTitle = totalCartAmount.value > 99 ? '99+' : totalCartAmount;
</script>

<template>
  <header class="flex items-center justify-between py-[15px] px-[20px]">
    <Navbar class="justify-center w-full gap-[50px]" />
    <div class="flex items-center gap-5">
      <CartPayment />
      <Button
          class="max-w-[50px] relative"
          variant="ghost"
          @click="redirectToCartPage"
      >
        <ShoppingCart :size="20" />
        <Badge
            v-if="totalCartAmount > 0"
            variant="destructive"
            class="absolute right-[10px] top-[-10px]"
        >
          {{ totalCartAmountTitle }}
        </Badge>
      </Button>
    </div>
  </header>
</template>

<style scoped lang="scss">

</style>