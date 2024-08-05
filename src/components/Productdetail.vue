<template>

</template>

<script>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

export default {
  name: 'ProductDetail',
  setup() {
    const route = useRoute();
    const router = useRouter();
    const product = ref({});
    const loading = ref(true);

    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${route.params.id}`);
        product.value = await response.json();
      } catch (error) {
        console.error('Error fetching product:', error);
      } finally {
        loading.value = false;
      }
    };

    

    onMounted(fetchProduct);

   
  },
};



</script>

<style>

</style>