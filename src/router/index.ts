import { createWebHistory, createRouter } from 'vue-router';
import CartPage from '@/pages/CartPage.vue';
import MainPage from '@/pages/MainPage.vue';
import ProductPage from '@/pages/ProductPage.vue';

export enum RouterPaths {
    HomePage = '/',
    CartPage = '/cart',
    ProductPage = '/product',
}

const routes = [
    { path: RouterPaths.HomePage, component: MainPage },
    { path: RouterPaths.CartPage, component: CartPage },
    { path: RouterPaths.ProductPage + '/:id', component: ProductPage },
];

export const routesForHeader = [
    { path: RouterPaths.HomePage, title: 'Home' },
];


export const router = createRouter({
    history: createWebHistory(),
    routes,
});