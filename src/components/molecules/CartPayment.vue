<script setup lang="ts">
import { ref } from 'vue';
import {useRoute, useRouter} from 'vue-router';
import { storeToRefs } from 'pinia';
import { Cake } from 'lucide-vue-next';

import { Dialog, DialogClose, DialogTitle, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { RouterPaths } from '@/router';
import { useCartStore } from '@/pinia/cartStore.ts';

const router = useRouter();
const route = useRoute();
const step = ref(1);

const isCartPage = route.path.includes(RouterPaths.CartPage);
const cartStore = useCartStore();
const { clearCart } = cartStore;
const { totalCartAmount } = storeToRefs(cartStore);

const autoModalClose = () => {
  setTimeout(() => {
    router.push(RouterPaths.HomePage);
  }, 3000);
};

const purchaseCart = () => {
  step.value = 2;
  clearCart();
  autoModalClose();
};
</script>

<template>
  <Dialog>
    <DialogTrigger>
      <Button v-if="isCartPage && totalCartAmount > 0">Purchase</Button>
    </DialogTrigger>
    <DialogContent>
      <tempalte v-if="step === 1">
        <div class="flex flex-col items-center gap-10">
          <DialogTitle class="text-2xl">
            Вы собираетесь совершить покупку
          </DialogTitle>
          <DialogFooter>
            <Button @click="purchaseCart">Оплатить</Button>
          </DialogFooter>
        </div>
      </tempalte>
      <template v-if="step === 2">
        <div class="flex flex-col items-center justify-center gap-6">
          <Cake :size="50" />
          <h3>Покупка успешно совершена!</h3>
          <p class="font-light text-sm">Автоматический редирект через 3 секунды.</p>
        </div>
      </template>
    </DialogContent>
  </Dialog>
</template>