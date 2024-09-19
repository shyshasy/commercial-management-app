<template>
    <div>
      <h2>Gestion des Commandes</h2>
      <!-- Formulaire pour ajouter/modifier une commande -->
      <div class="mb-3">
        <input v-model="newOrder.date" class="form-control" placeholder="Date">
        <input v-model="newOrder.customer" class="form-control mt-2" placeholder="Client">
        <input v-model="newOrder.deliveryAddress" class="form-control mt-2" placeholder="Adresse de Livraison">
        <input v-model="newOrder.trackNumber" class="form-control mt-2" placeholder="Numéro de Suivi">
        <input v-model="newOrder.status" class="form-control mt-2" placeholder="État">
        <button @click="addOrder" class="btn btn-primary mt-3">Ajouter Commande</button>
      </div>
      <!-- Liste des commandes -->
      <ul class="list-group">
        <li v-for="order in orders" :key="order.id" class="list-group-item d-flex justify-content-between align-items-center">
          <span>{{ order.date }} - {{ order.customer }}</span>
          <router-link :to="{ name: 'OrderDetail', params: { id: order.id } }" class="btn btn-info btn-sm">Détails</router-link>
          <button @click="editOrder(order)" class="btn btn-secondary btn-sm">Modifier</button>
          <button @click="removeOrder(order.id)" class="btn btn-danger btn-sm">Supprimer</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        newOrder: {
          date: '',
          customer: '',
          deliveryAddress: '',
          trackNumber: '',
          status: ''
        },
        orders: []
      }
    },
    methods: {
      addOrder() {
        // Ajouter une commande (dummy logic)
        this.orders.push({ ...this.newOrder, id: Date.now() });
        this.newOrder = { date: '', customer: '', deliveryAddress: '', trackNumber: '', status: '' };
      },
      editOrder(order) {
        // Modifier une commande (dummy logic)
        alert(`Modifier la commande ${order.id}`);
      },
      removeOrder(id) {
        // Supprimer une commande (dummy logic)
        this.orders = this.orders.filter(order => order.id !== id);
      }
    }
  }
  </script>
  
  <style scoped>
  /* Styles pour le composant Order */
  </style>
  