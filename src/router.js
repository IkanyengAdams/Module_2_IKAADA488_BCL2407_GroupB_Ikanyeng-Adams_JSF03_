import { createRouter, createWebHistory } from 'vue-router';
import Productlist from './components/Productlist.vue';
import ProductDetail from './components/Productdetail.vue';
import Wishlist from './components/Wishlist.vue';
import Cart from './components/Cart.vue';
import Login from './components/Login.vue';


/**
 * Route definitions for the application.
 * @type {Array<Object>}
 */

const routes = [
  { path: '/', component: Productlist 

     /**
     * Route to display the product list.
     */
    
  },

  

  { path: '/product/:id', component: ProductDetail

    /**
     * Route to display the product detail page.
     * @param {string} id - The ID of the product.
     */

   },
  { path: '/wishlist', component: Wishlist 

     /**
     * Route to display the wishlist.
     */

  },
  { path: '/cart', component: Cart

     /**
     * Route to display the cart.
     */

   }, 
  { path: '/login', component: Login

     /**
     * Route to display the login page.
     */

   }
];

/**
 * Creates the Vue router instance.
 * @type {import('vue-router').Router}
 */

const router = createRouter({

  /**
   * Uses HTML5 history mode.
   */
  
  history: createWebHistory(),
  routes,
});

export default router;
