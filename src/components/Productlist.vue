<template>
  <div class="productlist">
    <div v-if="loading" class="loading">
      Loading...
    </div>
    <div v-else class="products-container">
      <div v-for="product in products" :key="product.id" class="product-card">
        <img :src="product.image" :alt="product.title" />
        <h2>{{ product.title }}</h2>
        <p>{{ '$' + product.price }}</p>
        <p>{{ product.category }}</p>
        <div class="rating">
          <svg v-for="i in 5" :key="i" :class="i <= Math.round(product.rating.rate) ? 'filled' : 'empty'" viewBox="0 0 24 24">
            <path d="M12 .587l3.668 7.571 8.332 1.151-6.063 5.852 1.428 8.287L12 18.897l-7.365 3.851 1.428-8.287-6.063-5.852 8.332-1.151z"/>
          </svg>
        </div>
        <button @click="viewProduct(product.id)" class="view-button">View Product</button>
      </div>
    </div>
  </div>
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
        const data = await response.json();
        products.value = data;
      } catch (error) {
        console.error('Error fetching products:', error);
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
      viewProduct,
    };
  },
};
</script>

<style scoped>
body {
  background-color: rgb(10, 17, 19);
  margin: 0;
  font-family: Arial, sans-serif;
}

.products-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1rem;
  justify-content: center;
}

.product-card {
  margin-top: 18px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  padding: 1rem;
  text-align: center;
  transition: transform 0.2s ease-in-out;
}

.product-card:hover {
  transform: scale(1.05);
}

.product-card img {
  max-width: 100%;
  height: 200px;
  border-radius: 8px;
}

.rating {
  
  margin-top: 0.5rem;
  display: flex;
  height: 20px;
  justify-content: center;
}

.rating svg.filled {
  fill: #f0981d;
}

.rating svg.empty {
  fill: #e0e0e0;
}

.view-button {
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background-color: #3b82f6;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
}

.view-button:hover {
  background-color: #17cee7;
}

.loading {
  text-align: center;
  font-size: 1.25rem;
  color: blue;
}
</style>
