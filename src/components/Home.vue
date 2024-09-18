<template>
    <div class="home-container">
      <div class="hero-section text-center">
        <h1>Bienvenue chez ABC Corporation</h1>
        <p class="lead">Votre solution de gestion commerciale élégante et moderne</p>
        <router-link to="/products">
          <button class="btn btn-primary btn-lg">
            <i class="fas fa-box-open me-2"></i> Découvrez nos produits
          </button>
        </router-link>
      </div>
      <div class="features-section text-center mt-5">
        <div class="container">
          <div class="row">
            <div class="col-md-3 mb-4">
              <div class="feature-card p-4 bg-white shadow rounded">
                <i class="fas fa-user-friends fa-2x mb-3"></i>
                <h2>Clients</h2>
                <p>Gérez vos clients facilement avec une interface intuitive.</p>
                <router-link to="/customers" class="btn btn-outline-primary">
                  <i class="fas fa-users me-2"></i> Voir les clients
                </router-link>
              </div>
            </div>
            <div class="col-md-3 mb-4">
              <div class="feature-card p-4 bg-white shadow rounded">
                <i class="fas fa-box fa-2x mb-3"></i>
                <h2>Produits</h2>
                <p>Organisez vos produits et contrôlez vos stocks avec efficacité.</p>
                <router-link to="/products" class="btn btn-outline-primary">
                  <i class="fas fa-boxes me-2"></i> Voir les produits
                </router-link>
              </div>
            </div>
            <div class="col-md-3 mb-4">
              <div class="feature-card p-4 bg-white shadow rounded">
                <i class="fas fa-shopping-cart fa-2x mb-3"></i>
                <h2>Commandes</h2>
                <p>Suivez et gérez vos commandes avec une vue claire et détaillée.</p>
                <router-link to="/orders" class="btn btn-outline-primary">
                  <i class="fas fa-clipboard-list me-2"></i> Voir les commandes
                </router-link>
              </div>
            </div>
            <div class="col-md-3 mb-4">
              <div class="feature-card p-4 bg-white shadow rounded">
                <i class="fas fa-credit-card fa-2x mb-3"></i>
                <h2>Paiements</h2>
                <p>Gérez les paiements de manière simple et efficace.</p>
                <router-link to="/payments" class="btn btn-outline-primary">
                  <i class="fas fa-receipt me-2"></i> Voir les paiements
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  <style scoped>
  /* Styles pour la vue d'accueil */
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
    transition: transform 0.3s;
  }
  
  .feature-card:hover {
    transform: translateY(-10px);
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
  