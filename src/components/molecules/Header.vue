<script setup lang="ts">
import { useRouter } from 'vue-router';
import { ShoppingCart } from 'lucide-vue-next';

import Navbar from '@/components/molecules/Navbar.vue';
import Badge from '@/components/ui/badge/Badge.vue';
import { Button } from '@/components/ui/button';
import { RouterPaths } from '@/router';

const totalCartAmount = 20;
const router = useRouter();

const redirectToCartPage = () => {
  router.push(RouterPaths.CartPage)
};
</script>

<template>
  <header class="flex items-center justify-between py-[15px] px-[20px]">
    <Navbar class="justify-center w-full gap-[50px]" />
    <Button class="max-w-[50px] relative" variant="ghost">
      <ShoppingCart :size="20" @click="redirectToCartPage" />
      <Badge
          variant="destructive"
          class="absolute right-[10px] top-[-10px]"
      >
        {{ totalCartAmount }}
      </Badge>
    </Button>
  </header>
</template>

<style scoped lang="scss">

</style>