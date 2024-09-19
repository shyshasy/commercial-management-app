<template>
  <div class="container mt-5">
    <!-- En-tête -->
    <div class="d-flex align-items-center mb-4">
      <h2>Customer Management</h2>
    </div>

    <!-- Bouton pour ouvrir la fenêtre modale d'ajout -->
    <button class="btn btn-primary mb-3" data-bs-toggle="modal" data-bs-target="#addCustomerModal">
      <i class="fas fa-user-plus me-2"></i> Add New Customer
    </button>

    <!-- Tableau Bootstrap pour afficher les clients -->
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Address</th>
          <th scope="col">Email</th>
          <th scope="col">Phone</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(customer, index) in customers" :key="customer.id">
          <th scope="row">{{ index + 1 }}</th>
          <td>{{ customer.name }}</td>
          <td>{{ customer.address }}</td>
          <td>{{ customer.email }}</td>
          <td>{{ customer.phone }}</td>
          <td>
            <button @click="listCustomer(customer)" class="btn btn-info btn-sm me-2">
              <i class="fas fa-eye"></i> 
            </button>
            <button @click="editCustomer(customer)" class="btn btn-warning btn-sm me-2">
              <i class="fas fa-edit"></i> 
            </button>
            <button @click="removeCustomer(customer.id)" class="btn btn-danger btn-sm">
              <i class="fas fa-trash-alt"></i> 
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Modal d'ajout de client -->
    <div class="modal fade" id="addCustomerModal" tabindex="-1" aria-labelledby="addCustomerModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="addCustomerModalLabel">Add a New Customer</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="mb-3">
              <label for="newCustomerName" class="form-label">Name</label>
              <input v-model="newCustomer.name" id="newCustomerName" class="form-control" placeholder="Name" />
            </div>
            <div class="mb-3">
              <label for="newCustomerAddress" class="form-label">Address</label>
              <input v-model="newCustomer.address" id="newCustomerAddress" class="form-control" placeholder="Address" />
            </div>
            <div class="mb-3">
              <label for="newCustomerEmail" class="form-label">Email</label>
              <input v-model="newCustomer.email" id="newCustomerEmail" class="form-control" placeholder="Email" />
            </div>
            <div class="mb-3">
              <label for="newCustomerPhone" class="form-label">Phone</label>
              <input v-model="newCustomer.phone" id="newCustomerPhone" class="form-control" placeholder="Phone" />
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" @click="confirmAddCustomer">Add Customer</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal fenêtre pour afficher les détails du client (List) -->
    <div v-if="selectedCustomer" class="modal show d-block" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Customer Details</h5>
            <button type="button" class="close" aria-label="Close" @click="clearSelection">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="mb-3">
              <label for="viewCustomerName" class="form-label">Name</label>
              <input v-model="selectedCustomer.name" id="viewCustomerName" class="form-control" placeholder="Name" readonly />
            </div>
            <div class="mb-3">
              <label for="viewCustomerAddress" class="form-label">Address</label>
              <input v-model="selectedCustomer.address" id="viewCustomerAddress" class="form-control" placeholder="Address" readonly />
            </div>
            <div class="mb-3">
              <label for="viewCustomerEmail" class="form-label">Email</label>
              <input v-model="selectedCustomer.email" id="viewCustomerEmail" class="form-control" placeholder="Email" readonly />
            </div>
            <div class="mb-3">
              <label for="viewCustomerPhone" class="form-label">Phone</label>
              <input v-model="selectedCustomer.phone" id="viewCustomerPhone" class="form-control" placeholder="Phone" readonly />
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" @click="clearSelection">Close</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal pour l'édition d'un client -->
    <div v-if="editingCustomer" class="modal show d-block" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Edit Customer</h5>
            <button type="button" class="close" aria-label="Close" @click="closeEditModal">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="mb-3">
              <label for="editCustomerName" class="form-label">Name</label>
              <input v-model="editingCustomer.name" id="editCustomerName" class="form-control" placeholder="Name" />
            </div>
            <div class="mb-3">
              <label for="editCustomerAddress" class="form-label">Address</label>
              <input v-model="editingCustomer.address" id="editCustomerAddress" class="form-control" placeholder="Address" />
            </div>
            <div class="mb-3">
              <label for="editCustomerEmail" class="form-label">Email</label>
              <input v-model="editingCustomer.email" id="editCustomerEmail" class="form-control" placeholder="Email" />
            </div>
            <div class="mb-3">
              <label for="editCustomerPhone" class="form-label">Phone</label>
              <input v-model="editingCustomer.phone" id="editCustomerPhone" class="form-control" placeholder="Phone" />
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" @click="closeEditModal">Close</button>
            <button type="button" class="btn btn-primary" @click="saveCustomer">Save Changes</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Déclaration des variables réactives
const newCustomer = ref({ name: '', address: '', email: '', phone: '' });
const customers = ref([]);
const selectedCustomer = ref(null);
const editingCustomer = ref(null);

// Méthodes pour gérer les clients
const confirmAddCustomer = () => {
  if (newCustomer.value.name && newCustomer.value.email && newCustomer.value.phone) {
    customers.value.push({ ...newCustomer.value, id: Date.now() });
    newCustomer.value = { name: '', address: '', email: '', phone: '' };
    const modal = document.getElementById('addCustomerModal');
    const modalInstance = bootstrap.Modal.getInstance(modal);
    modalInstance.hide(); // Ferme la fenêtre modale après l'ajout
  } else {
    alert('Please fill out all required fields.');
  }
};

const editCustomer = (customer) => {
  editingCustomer.value = { ...customer };
};

const closeEditModal = () => {
  editingCustomer.value = null;
};

const saveCustomer = () => {
  const index = customers.value.findIndex(c => c.id === editingCustomer.value.id);
  if (index !== -1) {
    customers.value[index] = editingCustomer.value;
    alert('Changes saved successfully!');
    closeEditModal();
  }
};

const removeCustomer = (id) => {
  customers.value = customers.value.filter(c => c.id !== id);
};

const listCustomer = (customer) => {
  selectedCustomer.value = { ...customer };
};

const clearSelection = () => {
  selectedCustomer.value = null;
};
</script>

<style scoped>
/* Styles personnalisés ici */
</style>
