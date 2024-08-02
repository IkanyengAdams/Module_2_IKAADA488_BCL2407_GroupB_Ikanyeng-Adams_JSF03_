import { createRouter, createWebHistory } from 'vue-router';
import Productlist from './components/Productlist.vue';

const routes = [
  {
    path: '/',
    name: 'Productlist',
    component: Productlist
  },
  
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;