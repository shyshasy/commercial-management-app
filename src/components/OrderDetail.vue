<template>
    <div>
      <h2>Détails de la Commande</h2>
      <!-- Formulaire pour ajouter/modifier les détails d'une commande -->
      <div class="mb-3">
        <input v-model="newDetail.product" class="form-control mb-2" placeholder="Produit">
        <input v-model="newDetail.quantity" type="number" class="form-control mb-2" placeholder="Quantité">
        <input v-model="newDetail.price" type="number" step="0.01" class="form-control mb-2" placeholder="Prix">
        <button @click="addDetail" class="btn btn-primary">Ajouter Détail</button>
      </div>
      <!-- Liste des détails de la commande -->
      <ul class="list-group">
        <li v-for="detail in details" :key="detail.id" class="list-group-item d-flex justify-content-between align-items-center">
          <span>{{ detail.product }} - {{ detail.quantity }} - {{ detail.price.toFixed(2) }} €</span>
          <button @click="removeDetail(detail.id)" class="btn btn-danger btn-sm">Supprimer</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { ref, defineProps } from 'vue';
  
  // Définition des props
  const props = defineProps({
    orderId: {
      type: Number,
      required: true
    }
  });
  
  // Déclaration des variables réactives
  const newDetail = ref({
    product: '',
    quantity: '',
    price: ''
  });
  const details = ref([]);
  
  // Méthodes pour gérer les détails de la commande
  const addDetail = () => {
    if (newDetail.value.product && newDetail.value.quantity && newDetail.value.price) {
      details.value.push({ ...newDetail.value, id: Date.now() });
      newDetail.value = { product: '', quantity: '', price: '' };
    } else {
      alert('Veuillez remplir tous les champs.');
    }
  };
  
  const removeDetail = (id) => {
    details.value = details.value.filter(detail => detail.id !== id);
  };
  </script>
  
  <style scoped>
  /* Styles pour le composant OrderDetail */
  </style>
  