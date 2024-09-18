<template>
    <div>
      <h2>Produits</h2>
      <button class="btn btn-primary mb-3" @click="showModal('add')">Ajouter Produit</button>
      <!-- Tableau des produits ici -->
      <modal :show="isModalVisible" @close="closeModal" :action="modalAction">
        <!-- Contenu du formulaire produit ici -->
      </modal>
    </div>
  </template>
  
  <script>
  import Modal from './Modal.vue'
  
  export default {
    components: { Modal },
    data() {
      return {
        isModalVisible: false,
        modalAction: ''
      }
    },
    methods: {
      showModal(action) {
        this.modalAction = action;
        this.isModalVisible = true;
      },
      closeModal() {
        this.isModalVisible = false;
      }
    }
  }
  </script>
  