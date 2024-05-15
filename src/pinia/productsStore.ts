import { reactive } from 'vue';
import { defineStore } from 'pinia';
import { ProductType } from '@/utils/types/products';

export const useProductsStore = defineStore('products', () => {
    const products = reactive<ProductType[]>([]);

    const addProducts = (_products: ProductType[]) => {
        products.splice(0, products.length, ..._products);
    };

    const clearProducts = () => {
        products.splice(0, products.length);
    };

    return {
        products, addProducts, clearProducts
    };
});