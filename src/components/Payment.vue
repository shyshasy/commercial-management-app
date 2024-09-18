<template>
    <div>
      <h2>Gestion des Paiements</h2>
      <!-- Formulaire pour ajouter/modifier un paiement -->
      <div class="mb-3">
        <input v-model="newPayment.date" class="form-control" placeholder="Date du Paiement">
        <input v-model="newPayment.amount" class="form-control mt-2" placeholder="Montant">
        <input v-model="newPayment.method" class="form-control mt-2" placeholder="Méthode de Paiement">
        <input v-model="newPayment.orderId" class="form-control mt-2" placeholder="ID de Commande">
        <button @click="addPayment" class="btn btn-primary mt-3">Ajouter Paiement</button>
      </div>
      <!-- Liste des paiements -->
      <ul class="list-group">
        <li v-for="payment in payments" :key="payment.id" class="list-group-item d-flex justify-content-between align-items-center">
          <span>{{ payment.date }} - {{ payment.amount }} - {{ payment.method }}</span>
          <button @click="editPayment(payment)" class="btn btn-secondary btn-sm">Modifier</button>
          <button @click="removePayment(payment.id)" class="btn btn-danger btn-sm">Supprimer</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        newPayment: {
          date: '',
          amount: '',
          method: '',
          orderId: ''
        },
        payments: []
      }
    },
    methods: {
      addPayment() {
        // Ajouter un paiement (dummy logic)
        this.payments.push({ ...this.newPayment, id: Date.now() });
        this.newPayment = { date: '', amount: '', method: '', orderId: '' };
      },
      editPayment(payment) {
        // Modifier un paiement (dummy logic)
        alert(`Modifier le paiement ${payment.id}`);
      },
      removePayment(id) {
        // Supprimer un paiement (dummy logic)
        this.payments = this.payments.filter(payment => payment.id !== id);
      }
    }
  }
  </script>
  
  <style scoped>
  /* Styles pour le composant Payment */
  </style>
  