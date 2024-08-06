import { createRouter, createWebHistory } from 'vue-router';
import Productlist from './components/Productlist.vue';
import ProductDetail from './components/Productdetail.vue';
import Wishlist from './components/Wishlist.vue';

const routes = [
  { path: '/', component: Productlist },
  { path: '/product/:id', component: ProductDetail },
  { path: '/wishlist', component: Wishlist },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
