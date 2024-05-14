import { defineStore } from 'pinia';
import type { Category } from '@/utils/types/categories';
import { computed, reactive } from 'vue';

export const useCategoriesStore = defineStore('categories', () => {
    const categories = reactive<Category[]>([]);

    const isCategoriesEmpty = computed(() => categories.length <= 0);

    const addCategories = (_categories: Array<Category>) => {
        categories.push(..._categories);
    };

    const clearCategories = () => {
        categories.splice(0, categories.length);
    };

    return { categories, isCategoriesEmpty, addCategories, clearCategories };
});