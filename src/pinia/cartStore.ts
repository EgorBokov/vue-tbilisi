import { computed, reactive } from 'vue';
import { defineStore } from 'pinia';
import type { ProductType } from '@/utils/types/products';
import { CART_STORAGE } from '@/utils/common/constants.ts';
import {getFromLocalStorage, updateLocalStorage} from '@/utils/common/storage';

export const useCartStore = defineStore('cart', () => {
    const cart = reactive<Array<ProductType>>(JSON.parse(getFromLocalStorage(CART_STORAGE)) || []);

    const totalCartAmount = computed(() => {
        return cart.length;
    });

    const addToCart = (product: ProductType) => {
        cart.push(product);

        updateLocalStorage(CART_STORAGE, JSON.stringify(cart));
    };

    const removeFromCart = (productId: number) => {
        const productIdInCart = cart.findIndex((element) => element.id === productId);

        cart.splice(productIdInCart, 1);
        updateLocalStorage(CART_STORAGE, JSON.stringify(cart));
    };

    const clearCart = () => {
        cart.splice(0, cart.length);
        localStorage.removeItem(CART_STORAGE);
    };

    return {
        cart,
        totalCartAmount,
        addToCart,
        removeFromCart,
        clearCart,
    };
});