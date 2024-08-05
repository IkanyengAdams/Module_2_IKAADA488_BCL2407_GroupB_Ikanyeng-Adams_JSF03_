<template>
  <div>
    
    <div v-if="loading" class="loading">Loading...</div>

    
    <div v-else>
      <div class="container">
        
        <div class="form-group">
          <select v-model="selectedCategory" @change="filterProducts" class="category-select">
            <option value="">All Categories</option>
            <option v-for="category in categories" :key="category" :value="category">{{ category }}</option>
          </select>

          
          <div class="relative w-full">
            <input type="search" class="search-input" placeholder="Search products..." v-model="searchQuery" @input="searchProducts" />
            <button type="submit" class="search-button">
              <span class="sr-only">Search</span>
            </button>
          </div>
        </div>

        
        <div class="sort-group">
          <label for="sort" class="sort-label">Sort by</label>
          <select id="sort" v-model="sortOption" @change="filterProducts" class="sort-select">
            <option value="default">Default</option>
            <option value="low">Price: Low to High</option>
            <option value="high">Price: High to Low</option>
          </select>
        </div>
      </div>

      
      <div class="products-container">
        <p v-if="filteredProducts.length === 0" class="no-items-message">No items found</p>
        <div v-else class="product-card" v-for="product in filteredProducts" :key="product.id">
          <img :src="product.image" :alt="product.title" />
          <h2>{{ product.title }}</h2>
          <p>{{ '$' + product.price }}</p>
          <p>{{ product.category }}</p>
          <div class="rating">
            <svg v-for="i in 5" :key="i" :class="i <= Math.round(product.rating.rate) ? 'filled' : 'empty'" viewBox="0 0 24 24">
              <path d="M12 .587l3.668 7.571 8.332 1.151-6.063 5.852 1.428 8.287L12 18.897l-7.365 3.851 1.428-8.287-6.063-5.852 8.332-1.151z"/>
            </svg>
          </div>
          <button class="view-button" @click="viewProduct(product.id)">View Product</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, computed } from 'vue';
import { useRouter } from 'vue-router';

export default {
  name: 'ProductList',
  setup() {
    const products = ref([]);
    const filteredProducts = ref([]);
    const loading = ref(true);
    const categories = ref([]);
    const selectedCategory = ref('');
    const searchQuery = ref('');
    const sortOption = ref('default');
    const noItemsFound = ref(false);
    const router = useRouter();

    const fetchProducts = async () => {
      try {
        const productsResponse = await fetch('https://fakestoreapi.com/products');
        products.value = await productsResponse.json();
        filteredProducts.value = products.value;
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        loading.value = false;
      }
    };

    const fetchCategories = async () => {
      try {
        const categoriesResponse = await fetch('https://fakestoreapi.com/products/categories');
        categories.value = await categoriesResponse.json();
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    const filterProducts = () => {
      filteredProducts.value = products.value
        .filter(product =>
          (!selectedCategory.value || product.category === selectedCategory.value) &&
          (!searchQuery.value || product.title.toLowerCase().includes(searchQuery.value.toLowerCase()))
        )
        .sort((a, b) => {
          if (sortOption.value === 'low') {
            return a.price - b.price;
          } else if (sortOption.value === 'high') {
            return b.price - a.price;
          } else {
            return 0;
          }
        });

      noItemsFound.value = filteredProducts.value.length === 0;
    };

    const searchProducts = () => {
      filterProducts();
    };

    const viewProduct = (productId) => {
      router.push(`/product/${productId}`);
    };

    onMounted(() => {
      fetchProducts();
      fetchCategories();
    });

    return {
      products,
      filteredProducts,
      loading,
      categories,
      selectedCategory,
      searchQuery,
      sortOption,
      noItemsFound,
      filterProducts,
      searchProducts,
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

.container {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 1rem;
  align-items: center;
  flex-wrap: wrap;
}

.form-group {
  display: flex;
  width: 100%;
  max-width: 31.25rem;
  position: relative;
}





.search-input {
  width: 100%;
  background-color: #f9fafb;
  border-left: 0;
}



#search-svg {
  size: 1px;
}

.sort-group {
  display: flex;
  align-items: center;
}

.sort-label {
  margin-right: 0.5rem;
  font-weight: 600;
}

.products-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.product-card {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  margin: 1rem;
  padding: 1rem;
  width: 288px;
  box-sizing: border-box;
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

.product-card .rating {
  margin-top: 0.5rem;
  display: flex;
  height: 20px;
  justify-content: center;
}

.rating svg.filled {
  fill: #fbc02d;
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
  background-color: #2563eb;
}

.no-items-message {
  color: blue;
  text-align: center;
  margin-top: 2rem;
  font-size: 1.25rem;
}

.loading {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 1.5rem;
  color: #555;
}

@media (max-width: 768px) {
  .product-card {
    width: calc(50% - 2rem);
  }

  .search-button {
    margin-left: 20px;
  }
}

@media (max-width: 480px) {
  .product-card {
    width: calc(100% - 2rem);
  }

  .search-button {
    margin-left: 20px;
  }
}
</style>
