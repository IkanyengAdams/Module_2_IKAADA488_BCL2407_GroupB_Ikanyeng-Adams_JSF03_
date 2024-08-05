<template>
  <header>
    <nav class="navbar">
      <div>
        <span class="heading" @click="goToProductList">SwiftCart</span>
      </div>
      <div class="navbar-items">
        <span class="navbar-item" @click="goToWishlist">Wishlist</span>
        <span class="navbar-item" @click="goToCart">Cart</span>
        <span class="navbar-item" @click="goToLogin">Login</span>
      </div>
      <button class="btn-toggle menu-icon" @click="toggleSidebar">
        &#9776;
      </button>
    </nav>
    <div :class="['sidebar', { open: openSidebar }]">
      <div class="sidebar-items">
        <span class="close-icon" @click="toggleSidebar">&times;</span>
        <br>
        <span class="sidebar-item" @click="goToWishlistAndClose">Wishlist</span>
        <span class="sidebar-item" @click="goToCartAndClose">Cart</span>
        <span class="sidebar-item" @click="goToLoginAndClose">Login</span>
      </div>
    </div>
  </header>
</template>


<script>
export default {
  data() {
    return {
      openSidebar: false,
    };
  },
  methods: {
    toggleSidebar() {
      this.openSidebar = !this.openSidebar;
    },
    goToProductList() {
      this.$router.push('/');
      this.closeSidebar();
    },
    
    closeSidebar() {
      this.openSidebar = false;
    }
  }
};

</script>

<style>
.navbar {
  background-color: blue;
  padding: 0.1px;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1000;
}

.heading {
  font-size: 30px;
  font-weight: bold;
  cursor: pointer;
}

.navbar-items {
  display: flex;
  flex-direction: row;
  padding: 1rem;
  color: white;
}

.navbar-item {
  padding: 0.5rem;
  margin: 0.5rem 0;
  cursor: pointer;
}

.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 220px;
  height: 100vh;
  background-color: hsl(0, 0%, 69%);
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.3);
  transform: translateX(-100%);
  transition: transform 0.8s ease-out;
  z-index: 999;
  padding-top: 70px; 
}

.sidebar.open {
  transform: translateX(0);
}

.sidebar-items {
  display: flex;
  flex-direction: column;
  padding: 1rem;
  color: white;
}

.sidebar-item {
  padding: 0.5rem;
  margin: 0.5rem 0;
  cursor: pointer;
}

.menu-icon {
  display: none;
}

.close-icon {
  font-size: 24px;
  cursor: pointer;
}



</style>
