<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/">ABC Corporation</router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link" to="/customers">
                <i class="fas fa-users"></i> Customer
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/products">
                <i class="fas fa-box"></i> Product
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/OrderList">
                <i class="fas fa-shopping-cart"></i> Order
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/payments">
                <i class="fas fa-credit-card"></i> Payment
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
/* Some chic styling */
.navbar {
  background-color: #f8f9fa;
}

.nav-link {
  font-weight: bold;
  color: #333;
}

.nav-link:hover {
  color: #007bff;
}

i {
  margin-right: 5px;
}
</style>
