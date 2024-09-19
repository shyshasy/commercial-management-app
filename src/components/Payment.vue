<template>
    <div class="container">
      <h2 class="mb-4 mt-3">Gestion des Paiements</h2> <!-- Titre de la page -->
  
      <!-- Bouton pour ouvrir la fenêtre modale d'ajout -->
      <button class="btn btn-primary mb-3" data-bs-toggle="modal" data-bs-target="#paymentModal">
        <i class="fas fa-plus-circle"></i> Ajouter Paiement
      </button>
  
      <!-- Modal pour ajouter ou modifier un paiement -->
      <div class="modal fade" id="paymentModal" tabindex="-1" aria-labelledby="paymentModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="paymentModalLabel">{{ isEditing ? 'Modifier Paiement' : 'Ajouter Paiement' }}</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <label for="date">Date du Paiement</label>
              <input v-model="newPayment.date" id="date" class="form-control" placeholder="Date du Paiement">
  
              <label for="amount" class="mt-2">Montant</label>
              <input v-model="newPayment.amount" id="amount" class="form-control mt-2" placeholder="Montant">
  
              <label for="method" class="mt-2">Méthode de Paiement</label>
              <input v-model="newPayment.method" id="method" class="form-control mt-2" placeholder="Méthode de Paiement">
  
              <label for="orderId" class="mt-2">ID de Commande</label>
              <input v-model="newPayment.orderId" id="orderId" class="form-control mt-2" placeholder="ID de Commande">
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Annuler</button>
              <button @click="isEditing ? updatePayment() : addPayment()" type="button" class="btn btn-primary" data-bs-dismiss="modal">
                <i class="fas fa-save"></i> {{ isEditing ? 'Modifier' : 'Ajouter' }} Paiement
              </button>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Modal pour lister un paiement -->
      <div class="modal fade" id="listPaymentModal" tabindex="-1" aria-labelledby="listPaymentModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="listPaymentModalLabel">Détails du Paiement</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <label for="listDate">Date du Paiement</label>
              <input v-model="currentPayment.date" id="listDate" class="form-control" readonly>
  
              <label for="listAmount" class="mt-2">Montant</label>
              <input v-model="currentPayment.amount" id="listAmount" class="form-control mt-2" readonly>
  
              <label for="listMethod" class="mt-2">Méthode de Paiement</label>
              <input v-model="currentPayment.method" id="listMethod" class="form-control mt-2" readonly>
  
              <label for="listOrderId" class="mt-2">ID de Commande</label>
              <input v-model="currentPayment.orderId" id="listOrderId" class="form-control mt-2" readonly>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Liste des paiements sous forme de tableau -->
      <table class="table table-striped">
        <thead>
          <tr>
            <th>Date</th>
            <th>Montant</th>
            <th>Méthode</th>
            <th>ID de Commande</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="payment in payments" :key="payment.id">
            <td>{{ payment.date }}</td>
            <td>{{ payment.amount }}</td>
            <td>{{ payment.method }}</td>
            <td>{{ payment.orderId }}</td>
            <td>
              <!-- Bouton Lister avec l'icône FontAwesome -->
              <button @click="listPayment(payment)" class="btn btn-info btn-sm me-1" data-bs-toggle="modal" data-bs-target="#listPaymentModal">
                <i class="fas fa-eye"></i> Lister
              </button>
              <!-- Bouton Modifier avec l'icône FontAwesome -->
              <button @click="editPayment(payment)" class="btn btn-secondary btn-sm me-1" data-bs-toggle="modal" data-bs-target="#paymentModal">
                <i class="fas fa-edit"></i> Modifier
              </button>
              <!-- Bouton Supprimer avec l'icône FontAwesome -->
              <button @click="removePayment(payment.id)" class="btn btn-danger btn-sm">
                <i class="fas fa-trash"></i> Supprimer
              </button>
            </td>
          </tr>
        </tbody>
      </table>
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
        currentPayment: {
          date: '',
          amount: '',
          method: '',
          orderId: ''
        },
        payments: [],
        isEditing: false // Flag pour vérifier si on modifie ou ajoute
      };
    },
    methods: {
      addPayment() {
        // Ajouter un paiement et réinitialiser le formulaire
        if (this.newPayment.date && this.newPayment.amount && this.newPayment.method && this.newPayment.orderId) {
          this.payments.push({ ...this.newPayment, id: Date.now() });
          this.newPayment = { date: '', amount: '', method: '', orderId: '' };
        }
      },
      editPayment(payment) {
        // Pré-remplir les champs pour la modification
        this.isEditing = true;
        this.newPayment = { ...payment };
      },
      updatePayment() {
        // Mettre à jour un paiement
        const paymentIndex = this.payments.findIndex(p => p.id === this.newPayment.id);
        if (paymentIndex !== -1) {
          this.payments.splice(paymentIndex, 1, { ...this.newPayment });
        }
        this.isEditing = false;
        this.newPayment = { date: '', amount: '', method: '', orderId: '' };
      },
      listPayment(payment) {
        // Afficher les détails d'un paiement dans une modal de visualisation
        this.currentPayment = { ...payment };
      },
      removePayment(id) {
        // Logic de suppression
        this.payments = this.payments.filter(payment => payment.id !== id);
      }
    }
  };
  </script>
  
  <style scoped>
  /* Ajout de styles spécifiques si nécessaire */
  .me-1 {
    margin-right: 8px; /* Spacing between buttons */
  }
  .mb-4 {
    margin-bottom: 20px;
  }
  .mt-3 {
    margin-top: 20px;
  }
  </style>
  