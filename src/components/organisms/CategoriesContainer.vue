<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useCategoriesStore } from '@/pinia/categoriesStore.ts';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import {useRouter} from 'vue-router';
import {RouterPaths} from '@/router';

const { categories, isCategoriesEmpty } = storeToRefs(useCategoriesStore());
const router = useRouter();

const redirectToExactCategory = (id: number, title: string) => {
  router.push(`${RouterPaths.Categories}/${id}?categoryTitle=${title}`);
};

</script>

<template>
  <div>
    <template v-if="!isCategoriesEmpty">
      <div class="container">
        <div
            class="category"
            v-for="item in categories"
            :key="item.id"
            @click="redirectToExactCategory(item.id, item.name)"
        >
          <span>
            {{ item.name }}
          </span>
          <Avatar>
            <AvatarImage :src="item.imageUrl" />
            <AvatarFallback>{{ item.name[0].toUpperCase() }}</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </template>

  </div>
</template>

<style scoped lang="scss">
.container {
  @apply flex justify-center gap-2.5 overflow-x-auto;
}

.category {
  @apply flex items-center gap-[10px] rounded-full border-2 border-slate-600 py-[5px] px-[10px] cursor-pointer transition ease-in-out duration-300 hover:opacity-[0.7] ;
}
</style>