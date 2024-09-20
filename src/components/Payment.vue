<template>
    <div class="container mt-5">
      <h2>Gestion des Paiements</h2>

      <button class="btn btn-success mb-3" @click="openAddModal">
        <i class="fas fa-plus"></i> Ajouter Nouveau Paiement
      </button>

      <table class="table table-striped mt-4">
        <thead>
          <tr>
            <th>Date</th>
            <th>Montant</th>
            <th>Méthode</th>
            <th>ID de Commande</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="payment in payments" :key="payment.id">
            <td>{{ payment.date }}</td>
            <td>{{ payment.amount }}</td>
            <td>{{ payment.method }}</td>
            <td>{{ payment.orderId }}</td>
            <td>{{ payment.status }}</td>
            <td>
              <button @click="listPayment(payment)" class="btn btn-info btn-sm me-2">
                <i class="fas fa-eye"></i>
              </button>
              <button @click="editPayment(payment)" class="btn btn-warning btn-sm me-2">
                <i class="fas fa-edit"></i>
              </button>
              <button @click="removePayment(payment.id)" class="btn btn-danger btn-sm">
                <i class="fas fa-trash"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <div v-if="showAddModal" class="modal show d-block" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Ajouter Nouveau Paiement</h5>
              <button type="button" class="close" @click="closeAddModal">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <input v-model="newPayment.date" class="form-control mb-2" placeholder="Date">
              <input v-model="newPayment.amount" class="form-control mb-2" placeholder="Montant">
              <input v-model="newPayment.method" class="form-control mb-2" placeholder="Méthode de Paiement">
              <input v-model="newPayment.orderId" class="form-control mb-2" placeholder="ID de Commande">
              <input v-model="newPayment.status" class="form-control mb-2" placeholder="Statut">
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" @click="closeAddModal">Fermer</button>
              <button type="button" class="btn btn-primary" @click="addPayment">Ajouter Paiement</button>
            </div>
          </div>
        </div>
      </div>

      <div v-if="selectedPayment" class="modal show d-block" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Détails du Paiement</h5>
              <button type="button" class="close" @click="clearSelection">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <p><strong>Date:</strong> {{ selectedPayment.date }}</p>
              <p><strong>Montant:</strong> {{ selectedPayment.amount }}</p>
              <p><strong>Méthode:</strong> {{ selectedPayment.method }}</p>
              <p><strong>ID de Commande:</strong> {{ selectedPayment.orderId }}</p>
              <p><strong>Status:</strong> {{ selectedPayment.status }}</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" @click="clearSelection">Fermer</button>
            </div>
          </div>
        </div>
      </div>

      <div v-if="editingPayment" class="modal show d-block" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Modifier Paiement</h5>
              <button type="button" class="close" @click="closeEditModal">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <input v-model="editingPayment.date" class="form-control mb-2" placeholder="Date">
              <input v-model="editingPayment.amount" class="form-control mb-2" placeholder="Montant">
              <input v-model="editingPayment.method" class="form-control mb-2" placeholder="Méthode de Paiement">
              <input v-model="editingPayment.orderId" class="form-control mb-2" placeholder="ID de Commande">
              <input v-model="editingPayment.status" class="form-control mb-2" placeholder="Statut">
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" @click="closeEditModal">Fermer</button>
              <button type="button" class="btn btn-primary" @click="savePayment">Enregistrer les Changements</button>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const payments = ref([]);
const newPayment = ref({
  date: '',
  amount: '',
  method: '',
  orderId: '',
  status: ''
});
const selectedPayment = ref(null);
const editingPayment = ref(null);
const showAddModal = ref(false);

const openAddModal = () => {
  showAddModal.value = true;
};

const closeAddModal = () => {
  showAddModal.value = false;
};

const addPayment = () => {
  if (newPayment.value.date && newPayment.value.amount) {
    payments.value.push({ ...newPayment.value, id: Date.now() });
    newPayment.value = { date: '', amount: '', method: '', orderId: '', status: '' };
    closeAddModal();
  } else {
    alert('Veuillez remplir tous les champs requis.');
  }
};

const editPayment = (payment) => {
  editingPayment.value = { ...payment };
};

const closeEditModal = () => {
  editingPayment.value = null;
};

const savePayment = () => {
  const index = payments.value.findIndex(p => p.id === editingPayment.value.id);
  if (index !== -1) {
    payments.value[index] = editingPayment.value;
    alert('Modifications enregistrées avec succès !');
  }
  closeEditModal();
};

const removePayment = (id) => {
  if (confirm('Êtes-vous sûr de vouloir supprimer ce paiement ?')) {
    payments.value = payments.value.filter(payment => payment.id !== id);
  }
};

const listPayment = (payment) => {
  selectedPayment.value = payment;
};

const clearSelection = () => {
  selectedPayment.value = null;
};
</script>

<style scoped>
/* Ajoutez ici vos styles personnalisés */
</style>
