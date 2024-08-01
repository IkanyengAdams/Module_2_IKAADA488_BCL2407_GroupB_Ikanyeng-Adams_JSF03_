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
    </nav>
  </header>
</template>

<script>
export default {};
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

</style>
