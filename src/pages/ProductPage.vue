<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { Loader } from 'lucide-vue-next';

import { APIStoreInstance } from '@/utils/http/requetsInstance.ts';
import ProductCardContainer from '@/components/organisms/ProductCardContainer.vue';
import { RouterPaths } from '@/router';
import MainLayout from '@/components/layouts/MainLayout.vue';
import { ProductType } from '@/utils/types/products';

const { params } = useRoute();
const router = useRouter();

const isLoading = ref(false);
const product = reactive<{ value: ProductType | null }>({
  value: null,
});

const checkIfIdParamValid = () => {
  if (!params?.id) {
    router.push(RouterPaths.HomePage);
    return;
  }
};

const handleProductRequest = async () => {
  try {
    isLoading.value = true;
    const response = await APIStoreInstance.send(`/products/${params.id}`, 'get');

    if (response?.data) {
      product.value = response.data;
    }
  } catch(error) {
    console.error(error);
  } finally {
    isLoading.value = false;
  }
};

onMounted(async () => {
  checkIfIdParamValid();
  await handleProductRequest();
});
</script>

<template>
  <MainLayout>
    <template v-if="!isLoading && product.value">
      <ProductCardContainer :product="product.value!"/>
    </template>
    <Loader v-else class="animate-spin mx-auto" />
  </MainLayout>
</template>

<style scoped lang="scss">

</style>