<script setup lang="ts">
import { ProductType } from '@/utils/types/products';
import { Banknote } from 'lucide-vue-next';
import { Card, CardHeader, CardTitle, CardContent, CardFooter, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

type IProductProps = {
  product: ProductType;
};

const { product } = defineProps<IProductProps>();
const emits = defineEmits<{
  redirectToProduct: [id: number],
  addToCart: [],
}>();

const handleRouteToProductPage = () => {
  emits('redirectToProduct', product.id);
};

const handleAddToCart = (event: Event) => {
  event.stopPropagation();
  emits('addToCart');
};

</script>

<template>
  <Card
      class="w-[380px] flex flex-col justify-between cursor-pointer"
      @click="handleRouteToProductPage"
  >
    <div>
      <CardHeader class="text-slate-500">
        <CardTitle>
          {{ product.name }}
        </CardTitle>
        <CardDescription>
          {{ product.defaultDisplayedPriceFormatted }}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <img class="rounded-[10px]" :src="product.imageUrl" alt="Alt image" />
        <CardDescription class="mt-2">
          <span v-html="product.description" />
        </CardDescription>
      </CardContent>
    </div>
    <CardFooter>
      <Button
          @click="handleAddToCart"
          class="w-full flex items-center gap-2.5"
      >
        <Banknote />
        <span>
          В корзину
        </span>
      </Button>
    </CardFooter>
  </Card>
</template>

<style scoped lang="scss">

</style>