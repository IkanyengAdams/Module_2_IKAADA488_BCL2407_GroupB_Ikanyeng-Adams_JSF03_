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

    const goBack = () => {
      router.push('/');
    };


    onMounted(fetchProduct);

    return {
      product,
      loading,
      goBack,
    };

   
  },
};

</script>

<style scoped>
.product-detail {
  display: flex;
  gap: 2rem;
  margin: 2rem;
  background-color: #f0f4f8;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.image-container img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  width: 300px;
}
.details-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex-grow: 1;
}


.category {
  font-weight: bold;
  color: #555;
}

.price {
  font-size: 1.5rem;
  color: #3b82f6;
}

.description {
  font-size: 1rem;
  color: #333;
}

.back-button {
  align-self: flex-start;
  padding: 0.5rem 1rem;
  background-color: #3b82f6;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  margin-bottom: 1rem;
}

.back-button:hover {
  background-color: #2563eb;
}

.loading {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 1.5rem;
  color: #258de1;
}



</style>