<template>
    <div>
      <h2>Gestion des Produits</h2>
      <!-- Formulaire pour ajouter/modifier un produit -->
      <div class="mb-3">
        <input v-model="newProduct.name" class="form-control" placeholder="Nom du produit">
        <input v-model="newProduct.description" class="form-control mt-2" placeholder="Description">
        <input v-model="newProduct.price" class="form-control mt-2" placeholder="Prix">
        <input v-model="newProduct.stock" class="form-control mt-2" placeholder="Stock">
        <input v-model="newProduct.category" class="form-control mt-2" placeholder="Catégorie">
        <input v-model="newProduct.barcode" class="form-control mt-2" placeholder="Code-barres">
        <input v-model="newProduct.status" class="form-control mt-2" placeholder="État">
        <button @click="addProduct" class="btn btn-primary mt-3">Ajouter Produit</button>
      </div>
      <!-- Liste des produits -->
      <ul class="list-group">
        <li v-for="product in products" :key="product.id" class="list-group-item d-flex justify-content-between align-items-center">
          <span>{{ product.name }}</span>
          <button @click="editProduct(product)" class="btn btn-secondary btn-sm">Modifier</button>
          <button @click="removeProduct(product.id)" class="btn btn-danger btn-sm">Supprimer</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        newProduct: {
          name: '',
          description: '',
          price: '',
          stock: '',
          category: '',
          barcode: '',
          status: ''
        },
        products: []
      }
    },
    methods: {
      addProduct() {
        // Ajouter un produit (dummy logic)
        this.products.push({ ...this.newProduct, id: Date.now() });
        this.newProduct = { name: '', description: '', price: '', stock: '', category: '', barcode: '', status: '' };
      },
      editProduct(product) {
        // Modifier un produit (dummy logic)
        alert(`Modifier le produit ${product.name}`);
      },
      removeProduct(id) {
        // Supprimer un produit (dummy logic)
        this.products = this.products.filter(product => product.id !== id);
      }
    }
  }
  </script>
  
  <style scoped>
  /* Styles pour le composant Product */
  </style>
  