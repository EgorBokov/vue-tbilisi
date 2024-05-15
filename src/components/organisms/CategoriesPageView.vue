<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { APIStoreInstance } from '@/utils/http/requetsInstance.ts';
import { RouterPaths } from '@/router';
import Product from '@/components/molecules/Product.vue';
import { ProductType } from '@/utils/types/products';
import { useCartStore } from '@/pinia/cartStore.ts';

const { params, query } = useRoute();
const { addToCart } = useCartStore();
const isLoading = ref(false);
const productsByFilter = reactive<ProductType[]>([]);

const categoryTitle = query?.categoryTitle;
const router = useRouter();

const currentCategoryRequest = async () => {
  try {
    isLoading.value = true;
    const response = await APIStoreInstance.send(`${RouterPaths.Products}?categories=${params.id}`, 'get');

    if (response?.data) {
      productsByFilter.push(...response.data.items);
    }
  } catch(error) {
    console.error(error);
  } finally {
    isLoading.value = false;
  }
};

const conditionPreventRender = () => {
  if (!params.id) {
    router.push(RouterPaths.HomePage);
    return;
  }
};

const handleMoveToProductPage = (id: number) => {
  router.push(`${RouterPaths.ProductPage}/${id}`);
};

const handleAddToCart = (item: ProductType) => {
  addToCart(item);
};

onMounted(async () => {
  conditionPreventRender();
  await currentCategoryRequest();
});

</script>

<template>
  <div class="flex flex-col w-full gap-6">
    <h3 v-if="categoryTitle" class="font-bold text-3xl">{{ categoryTitle }}</h3>
    <div v-if="productsByFilter.length > 0" class="flex justify-evenly flex-wrap gap-y-5 gap-x-3">
      <Product
          v-for="item in productsByFilter"
          :key="item.id"
          :product="item"
          @redirectToProduct="handleMoveToProductPage"
          @addToCart="handleAddToCart(item)"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>