<script setup lang="ts">
import {onMounted, ref} from 'vue';
import { APIStoreInstance } from '@/utils/http/requetsInstance.ts';

import { useCategoriesStore } from '@/pinia/categoriesStore.ts';
import CategoriesContainer from '@/components/organisms/CategoriesContainer.vue';
import ProductsContainer from '@/components/organisms/ProductsContainer.vue';
import { useProductsStore } from '@/pinia/productsStore.ts';
import { Loader } from 'lucide-vue-next';

const isLoading = ref(false);

const categoriesStore = useCategoriesStore();
const productsStore = useProductsStore();
const { addCategories } = categoriesStore;
const { addProducts } = productsStore;

const handleGetCategories = async () => {
  try {
    isLoading.value = true;

    const response = await APIStoreInstance.send('/categories', 'get');
    const productsResponse = await APIStoreInstance.send('/products', 'get');

    if (productsResponse.data) {
      addProducts(productsResponse.data?.items);
    }

    if (response.data) {
      addCategories(response.data?.items);
    }

  } catch(error) {
    console.log({ error });
  } finally {
    isLoading.value = false;
  }
};

onMounted(async () => {
  await handleGetCategories();
});
</script>

<template>
  <div class="flex flex-col gap-y-10">
    <template v-if="!isLoading">
      <CategoriesContainer />
      <ProductsContainer />
    </template>
    <Loader v-else class="animate-spin mx-auto" />
  </div>
</template>

<style scoped lang="scss">

</style>