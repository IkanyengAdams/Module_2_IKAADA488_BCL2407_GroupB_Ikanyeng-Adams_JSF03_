import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router';

/**
 * Initializes and mounts the Vue application.
 */

createApp(App)
.use(router) // Integrates the router with the Vue application
.mount('#app'); // Mounts the application to the HTML element with id 'app'
