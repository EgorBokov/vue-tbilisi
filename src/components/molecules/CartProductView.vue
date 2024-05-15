<script setup lang="ts">
import { ProductType } from '@/utils/types/products';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-vue-next';

type ICartProductViewProps = {
  product: ProductType;
};

const emits = defineEmits<{
  removeFromCart: [id: number],
  redirectToProduct: [id: number],
}>();

const { product } = defineProps<ICartProductViewProps>();

const handleRemoveFromCart = (event: Event) => {
  event.stopPropagation();
  emits('removeFromCart', product.id);
};

const handleRedirectToProduct = () => {
  emits('redirectToProduct', product.id);
};
</script>

<template>
  <Card class="cursor-pointer" @click="handleRedirectToProduct">
    <CardHeader>
      <h2 class="font-bold line-clamp-1">
        <span class="truncate">
          {{ product.name }}
        </span>
      </h2>
      <p>{{ product.defaultDisplayedPriceFormatted }}</p>
    </CardHeader>
    <CardContent>
      <img :src="product.imageUrl" alt="Image" class="rounded-[6px]" />
    </CardContent>
    <CardFooter>
      <Button variant="ghost" @click="handleRemoveFromCart" class="w-full">
        <X />
      </Button>
    </CardFooter>
  </Card>
</template>