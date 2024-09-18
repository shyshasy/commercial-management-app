<template>
    <div>
      <h2>Détails de la Commande</h2>
      <!-- Formulaire pour ajouter/modifier les détails d'une commande -->
      <div class="mb-3">
        <input v-model="newDetail.product" class="form-control" placeholder="Produit">
        <input v-model="newDetail.quantity" class="form-control mt-2" placeholder="Quantité">
        <input v-model="newDetail.price" class="form-control mt-2" placeholder="Prix">
        <button @click="addDetail" class="btn btn-primary mt-3">Ajouter Détail</button>
      </div>
      <!-- Liste des détails de la commande -->
      <ul class="list-group">
        <li v-for="detail in details" :key="detail.id" class="list-group-item d-flex justify-content-between align-items-center">
          <span>{{ detail.product }} - {{ detail.quantity }} - {{ detail.price }}</span>
          <button @click="removeDetail(detail.id)" class="btn btn-danger btn-sm">Supprimer</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    props: ['orderId'],
    data() {
      return {
        newDetail: {
          product: '',
          quantity: '',
          price: ''
        },
        details: []
      }
    },
    methods: {
      addDetail() {
        // Ajouter un détail de commande (dummy logic)
        this.details.push({ ...this.newDetail, id: Date.now() });
        this.newDetail = { product: '', quantity: '', price: '' };
      },
      removeDetail(id) {
        // Supprimer un détail de commande (dummy logic)
        this.details = this.details.filter(detail => detail.id !== id);
      }
    }
  }
  </script>
  
  <style scoped>
  /* Styles pour le composant OrderDetail */
  </style>
  