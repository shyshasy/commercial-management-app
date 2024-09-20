<template>
  <div class="home-container">
    <div class="hero-section text-center">
      <h1>Welcome to ABC Corporation</h1>
      <p class="lead">Your elegant and modern business management solution</p>
      <router-link to="/products">
        <button class="btn btn-primary btn-lg">
          <i class="fas fa-box-open me-2"></i> Discover our products
        </button>
      </router-link>
    </div>
    <div class="features-section text-center mt-5">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-4 mb-4">
            <div class="feature-card p-4 bg-white shadow rounded">
              <i class="fas fa-user-friends fa-2x mb-3"></i>
              <h2>Clients</h2>
              <p>Manage your clients easily with an intuitive interface.</p>
              <router-link to="/customers" class="btn btn-outline-primary">
                <i class="fas fa-users me-2"></i> View Clients
              </router-link>
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <div class="feature-card p-4 bg-white shadow rounded">
              <i class="fas fa-box fa-2x mb-3"></i>
              <h2>Products</h2>
              <p>Organize your products and efficiently control your inventory.</p>
              <router-link to="/products" class="btn btn-outline-primary">
                <i class="fas fa-boxes me-2"></i> View Products
              </router-link>
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <div class="feature-card p-4 bg-white shadow rounded">
              <i class="fas fa-shopping-cart fa-2x mb-3"></i>
              <h2>Orders</h2>
              <p>Track and manage your orders with a clear and detailed view.</p>
              <router-link to="/orders" class="btn btn-outline-primary">
                <i class="fas fa-clipboard-list me-2"></i> View Orders
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

  
  <style scoped>
  
  .home-container {
  padding: 50px 0;
}

.hero-section {
  background-color: #f5f5f5;
  padding: 60px 20px;
  margin-bottom: 50px;
}

.hero-section h1 {
  font-size: 3rem;
  color: #343a40;
}

.hero-section p {
  font-size: 1.25rem;
  color: #6c757d;
}

.features-section {
  padding: 30px 0;
}

.feature-card {
  transition: transform 0.3s, box-shadow 0.3s;
  border-radius: 10px; /* Coins arrondis */
}

.feature-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15); /* Ombre au survol */
}

.feature-card i {
  color: #007bff;
}

.feature-card h2 {
  font-size: 1.5rem;
  color: #343a40;
  margin-top: 15px;
}

.feature-card p {
  font-size: 1rem;
  color: #6c757d;
}

.feature-card .btn {
  margin-top: 10px;
}
  </style>
  