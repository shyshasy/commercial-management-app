<template>
    <div>
      <h2>Commandes</h2>
      <button class="btn btn-primary mb-3" @click="showOrderModal('add')">Ajouter Commande</button>
      <!-- Tableau des commandes ici -->
      <modal :show="isOrderModalVisible" @close="closeOrderModal" :action="orderModalAction">
        <order-detail v-if="selectedOrder" :order="selectedOrder" />
      </modal>
    </div>
  </template>
  
  <script>
  import Modal from './Modal.vue'
  import OrderDetail from './OrderDetail.vue'
  
  export default {
    components: { Modal, OrderDetail },
    data() {
      return {
        isOrderModalVisible: false,
        orderModalAction: '',
        selectedOrder: null
      }
    },
    methods: {
      showOrderModal(action, order = null) {
        this.orderModalAction = action;
        this.selectedOrder = order;
        this.isOrderModalVisible = true;
      },
      closeOrderModal() {
        this.isOrderModalVisible = false;
      }
    }
  }
  </script>
  