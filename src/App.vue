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
/* Style chic et moderne pour la navbar */
.navbar {
  background-color: #f5f5f5; /* Couleur douce et élégante */
  font-family: 'Poppins', sans-serif; /* Police moderne et élégante */
  padding: 1rem 2rem;
  border-bottom: 1px solid #ddd; /* Ligne subtile pour un look soigné */
}

.nav-link {
  font-weight: 500;
  color: #555; /* Ton sobre et chic pour le texte */
  transition: color 0.3s ease, transform 0.3s ease; /* Effet de transition chic */
}

.nav-link:hover {
  color: #ff6f61; /* Couleur vive et jeune pour l'effet hover */
  transform: scale(1.05); /* Effet zoom léger pour un look moderne */
}

.nav-link.active {
  color: rgba(144, 238, 144, 0.7); /* Vert clair transparent pour l'onglet actif */
  border-bottom: 2px solid rgba(144, 238, 144, 0.7); /* Soulignement subtil et transparent */
}

.navbar-brand {
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
}

.navbar-brand.active {
  color: rgba(144, 238, 144, 0.7); /* Appliquer la même couleur verte pour Home actif */
}

.navbar-brand:hover {
  color: #ff6f61;
  text-decoration: none;
}

.navbar-toggler-icon {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3E%3Cpath stroke='rgba%28255, 111, 97, 1%29' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
}

/* Ajouter une ombre douce à la navbar */
.navbar {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.navbar-nav .nav-item {
  margin-left: 15px;
}

i {
  margin-right: 8px;
}

/* Transition pour un effet jeune */
.navbar-toggler {
  transition: transform 0.3s ease;
}

.navbar-toggler:hover {
  transform: rotate(90deg); /* Animation chic et moderne */
}
</style>
