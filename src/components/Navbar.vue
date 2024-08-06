<template>
  <header>
    <nav class="navbar">
      <div>
        <img src="/public/android-chrome-192x192.png" alt="logo-icon" style="height: 32px;">
        <span class="heading" @click="goToProductList">SwiftCart</span>
      </div>
      <div class="navbar-items">
        <span class="navbar-item" @click="goToWishlist">
          <i class="fas fa-heart"></i>
          <strong>Wishlist</strong>
        </span>
        <span class="navbar-item" @click="goToCart">
          <i class="fas fa-shopping-cart"></i>
          <strong>Cart</strong>
        </span>
        <span class="navbar-item" @click="goToLogin">
          <i class="fas fa-user"></i>
          <strong>Login</strong>
        </span>
      </div>
      <button class="btn-toggle menu-icon" @click="toggleSidebar">
        &#9776;
      </button>
    </nav>
    <div :class="['sidebar', { open: openSidebar }]">
      <div class="sidebar-items">
        <span class="close-icon" @click="toggleSidebar">&times;</span>
        <br>
        <span class="sidebar-item" @click="goToWishlistAndClose">
          <i class="fas fa-heart"></i>
          <strong>Wishlist</strong>
        </span>
        <span class="sidebar-item" @click="goToCartAndClose">
          <i class="fas fa-shopping-cart"></i>
          <strong>Cart</strong>
        </span>
        <span class="sidebar-item" @click="goToLoginAndClose">
          <i class="fas fa-user"></i>
          <strong>Login</strong>
        </span>
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
    goToWishlist() {
      this.$router.push('/wishlist');
    },
    goToCart() {
      this.$router.push('/cart');
    },
    goToLogin() {
      this.$router.push('/login');
    },
    goToWishlistAndClose() {
      this.goToWishlist();
      this.closeSidebar();
    },
    goToCartAndClose() {
      this.goToCart();
      this.closeSidebar();
    },
    goToLoginAndClose() {
      this.goToLogin();
      this.closeSidebar();
    },
    closeSidebar() {
      this.openSidebar = false;
    }
  }
};
</script>

<style scoped>
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

.img {
  margin-right: 10px;
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
  display: flex;
  align-items: center;
}

.navbar-item i {
  margin-right: 5px;
}

.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 220px;
  height: 100vh;
  background-color: blue;
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
  display: flex;
  align-items: center;
}

.sidebar-item i {
  margin-right: 5px;
}

.menu-icon {
  display: none;
}

.close-icon {
  font-size: 24px;
  cursor: pointer;
}

@media (max-width: 768px) {
  .menu-icon {
    display: block;
    margin-left: 2rem;
  }
  .navbar-items {
    display: none;
  }
  .sidebar {
    display: block;
  }
}

@media (min-width: 769px) {
  .sidebar {
    display: none;
  }
  .navbar-items {
    display: flex;
  }
}
</style>
