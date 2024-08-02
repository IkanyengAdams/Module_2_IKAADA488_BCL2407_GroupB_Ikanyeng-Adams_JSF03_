<template>



</template>

<script>

import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

export default {
  name: 'Productlist',
  setup() {
    const products = ref([]);
    const loading = ref(true);
    const router = useRouter();

    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        products.value = await response.json();
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        loading.value = false;
      }
    };

    const viewProduct = (productId) => {
      router.push(`/product/${productId}`);
    };

    onMounted(fetchProducts);

    return {
      products,
      loading,
      viewProduct
    };
  }
};
</script>