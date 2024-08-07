<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import { ref, provide } from 'vue';
import Navbar from './components/Navbar.vue';

export default {
  name: 'App',
  components: {
    Navbar,
  },

   /**
   * Sets up reactive state and provides it to the rest of the application.
   * @returns {Object} The setup context.
   */

  setup() {

     /**
     * The currently selected category for filtering products.
     * @type {import('vue').Ref<string>}
     */

    const selectedCategory = ref('');

    /**
     * The current search query.
     * @type {import('vue').Ref<string>}
     */

    const searchQuery = ref('');

    /**
     * The selected sorting option.
     * @type {import('vue').Ref<string>}
     */
    
    const sortOption = ref('default');

    provide('filters', {
      selectedCategory,
      searchQuery,
      sortOption,
    });

    return {};
  },
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
