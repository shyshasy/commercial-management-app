<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div class="container-fluid">
        <li class="nav-item">
          <router-link class="nav-link" to="/" active-class="active">
            <i class="fas fa-home"></i> Home
          </router-link>
        </li>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/customers" active-class="active">
                <i class="fas fa-users"></i> Customer
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/products" active-class="active">
                <i class="fas fa-box"></i> Product
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/OrderList" active-class="active">
                <i class="fas fa-shopping-cart"></i> Order
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

<style scoped>

.navbar {
  background-color: #f5f5f5; 
  font-family: 'Poppins', sans-serif; 
  padding: 1rem 2rem;
  border-bottom: 1px solid #ddd; 
}

.nav-link {
  font-weight: 500;
  color: #555; 
  transition: color 0.3s ease, transform 0.3s ease; 
}

.nav-link:hover {
  color: #ff6f61; 
  transform: scale(1.05); 
}

.nav-link.active {
  color: rgba(144, 238, 144, 0.7); 
  border-bottom: 2px solid rgba(144, 238, 144, 0.7); 
}

.navbar-brand {
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
}

.navbar-brand.active {
  color: rgba(144, 238, 144, 0.7);
}

.navbar-brand:hover {
  color: #ff6f61;
  text-decoration: none;
}

.navbar-toggler-icon {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3E%3Cpath stroke='rgba%28255, 111, 97, 1%29' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
}


.navbar {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.navbar-nav .nav-item {
  margin-left: 15px;
}

i {
  margin-right: 8px;
}

.navbar-toggler {
  transition: transform 0.3s ease;
}

.navbar-toggler:hover {
  transform: rotate(90deg); 
}
</style>
