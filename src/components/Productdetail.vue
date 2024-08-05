<template>
 <div class="product-detail" v-if="!loading">
    <button @click="goBack" class="back-button">Back to Products</button>
    <div class="image-container">
      <img :src="product.image" :alt="product.title" />
    </div>
    <div class="details-container">
      <h1>{{ product.title }}</h1>
      <p class="category">{{ product.category }}</p>
      <p class="price">{{ '$' + product.price }}</p>
      <p class="description">{{ product.description }}</p>
    </div>
  </div>
  <div v-else class="loading">Loading...</div>

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