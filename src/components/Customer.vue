<template>
  <div>
    <div class="d-flex align-items-center mb-4">
      <i class="fas fa-users fa-2x me-2"></i>
      <h2>Gestion des Clients</h2>
    </div>

    <!-- Formulaire pour ajouter un client -->
    <div class="card p-3 mb-4">
      <h4><i class="fas fa-user-plus me-2"></i>Ajouter un nouveau client</h4>
      <div class="mb-3">
        <input v-model="newCustomer.name" class="form-control mt-2" placeholder="Nom" />
        <input v-model="newCustomer.address" class="form-control mt-2" placeholder="Adresse" />
        <input v-model="newCustomer.email" class="form-control mt-2" placeholder="Email" />
        <input v-model="newCustomer.phone" class="form-control mt-2" placeholder="Téléphone" />
      </div>
      <button @click="addCustomer" class="btn btn-primary">
        <i class="fas fa-plus-circle"></i> Ajouter Client
      </button>
    </div>

    <!-- Liste des clients -->
    <div class="card p-3">
      <ul class="list-group">
        <li v-for="customer in customers" :key="customer.id" class="list-group-item d-flex justify-content-between align-items-center">
          <div>
            <i class="fas fa-user me-2"></i>
            <span>{{ customer.name }}</span>
          </div>
          <div>
            <button @click="listCustomer(customer)" class="btn btn-secondary btn-sm me-2">
              <i class="fas fa-list"></i> Lister
            </button>
            <button @click="editCustomer(customer)" class="btn btn-secondary btn-sm me-2">
              <i class="fas fa-edit"></i> Modifier
            </button>
            <button @click="removeCustomer(customer.id)" class="btn btn-danger btn-sm">
              <i class="fas fa-trash-alt"></i> Supprimer
            </button>
          </div>
        </li>
      </ul>
    </div>

    <!-- Détails du client sélectionné (pour Lister) -->
    <div v-if="selectedCustomer" class="modal show d-block" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Détails du client</h5>
            <button type="button" class="close" aria-label="Close" @click="clearSelection">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p><strong>Nom :</strong> {{ selectedCustomer.name }}</p>
            <p><strong>Adresse :</strong> {{ selectedCustomer.address }}</p>
            <p><strong>Email :</strong> {{ selectedCustomer.email }}</p>
            <p><strong>Téléphone :</strong> {{ selectedCustomer.phone }}</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" @click="clearSelection">Fermer</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Fenêtre modale pour modifier un client -->
    <div v-if="editingCustomer" class="modal show d-block" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button @click="listCustomer(editingCustomer)" class="btn btn-secondary btn-sm mb-3">
              <i class="fas fa-list"></i> Lister
            </button>
            <h5 class="modal-title">Modifier le client</h5>
            <button type="button" class="close" aria-label="Close" @click="closeEditModal">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="mb-3">
              <input v-model="editingCustomer.name" class="form-control mt-2" placeholder="Nom" />
              <input v-model="editingCustomer.address" class="form-control mt-2" placeholder="Adresse" />
              <input v-model="editingCustomer.email" class="form-control mt-2" placeholder="Email" />
              <input v-model="editingCustomer.phone" class="form-control mt-2" placeholder="Téléphone" />
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" @click="closeEditModal">Fermer</button>
            <button type="button" class="btn btn-primary" @click="saveCustomer">Enregistrer les modifications</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      newCustomer: {
        name: '',
        address: '',
        email: '',
        phone: ''
      },
      customers: [],
      selectedCustomer: null, // Client sélectionné pour affichage des détails
      editingCustomer: null // Client en cours de modification
    };
  },
  methods: {
    addCustomer() {
      if (this.newCustomer.name && this.newCustomer.email && this.newCustomer.phone) {
        this.customers.push({ ...this.newCustomer, id: Date.now() });
        this.newCustomer = { name: '', address: '', email: '', phone: '' };
      } else {
        alert('Veuillez remplir tous les champs obligatoires.');
      }
    },
    editCustomer(customer) {
      this.editingCustomer = { ...customer }; // Prépare la copie pour modification
    },
    closeEditModal() {
      this.editingCustomer = null; // Ferme la modale de modification
    },
    saveCustomer() {
      const index = this.customers.findIndex(c => c.id === this.editingCustomer.id);
      if (index !== -1) {
        this.$set(this.customers, index, this.editingCustomer);
        alert('Modifications enregistrées avec succès !'); // Message de confirmation
      }
      this.closeEditModal();
    },
    removeCustomer(id) {
      if (confirm('Êtes-vous sûr de vouloir supprimer ce client ?')) {
        this.customers = this.customers.filter(customer => customer.id !== id);
      }
    },
    listCustomer(customer) {
      this.selectedCustomer = customer;
    },
    clearSelection() {
      this.selectedCustomer = null; // Ferme la modale de détails
    }
  }
};
</script>
<style scoped>
/* Styles pour rendre le design plus chic */
h2 {
  font-weight: bold;
  color: #333;
}

.card {
  background-color: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.list-group-item {
  font-size: 16px;
}

button i {
  margin-right: 5px;
}

.btn-primary {
  background-color: #007bff;
  border-color: #007bff;
}

.btn-secondary {
  background-color: #6c757d;
  border-color: #6c757d;
}

.btn-danger {
  background-color: #dc3545;
  border-color: #dc3545;
}

.fas {
  color: #007bff;
}

.me-2 {
  margin-right: 8px;
}

/* Style pour la fenêtre modale */
.modal.show {
  display: block;
  background: rgba(0, 0, 0, 0.5);
}

.modal-dialog {
  max-width: 600px;
  margin: 1.75rem auto;
}

.modal-content {
  background-color: #fff;
  border-radius: 0.3rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.modal-header .close {
  margin: -1rem -1rem -1rem auto;
}

.modal-footer {
  border-top: 1px solid #dee2e6;
}

.modal-body .btn-info {
  margin-bottom: 15px; /* Espace entre le bouton "Lister" et le reste du formulaire */
}
</style>
