<template>
  <div>
    <h2>Gestion des Clients</h2>
    <button class="btn btn-primary" @click="showModal('add')">Ajouter un Client</button>
    <!-- Table des clients -->
    <!-- Code pour afficher les clients -->
    <!-- Modals pour ajouter/modifier les clients -->
    <AddEditCustomerModal :customer="selectedCustomer" @close="closeModal" @save="saveCustomer"/>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import AddEditCustomerModal from './AddEditCustomerModal.vue';

const selectedCustomer = ref(null);

const showModal = (action) => {
  // Code pour afficher le modal en fonction de l'action (ajouter ou modifier)
};

const closeModal = () => {
  // Code pour fermer le modal
};

const saveCustomer = (customer) => {
  // Code pour sauvegarder le client
};
</script>
