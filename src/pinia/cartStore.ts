import { reactive } from 'vue';
import { defineStore } from 'pinia';
import type { ProductType } from '@/utils/types/products';

type PartialProductType = Partial<ProductType>;

export const useCartStore = defineStore('cart', () => {
    const cart = reactive({
        value: new Map<ProductType['id'], Partial<ProductType>[]>(),
    });

    const addToCart = (product: ProductType) => {
        const isProductAlreadyIncluded = cart.value.has(product.id);

        if (isProductAlreadyIncluded) {
            cart.value.get(product.id)!.push(product);
            return;
        }

        cart.value.set(product.id, [product]);
    }

    return {
        cart,
        addToCart
    };
});