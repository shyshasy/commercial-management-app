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
              <i class="fas fa-eye"></i> List
            </button>
            <button @click="editCustomer(customer)" class="btn btn-warning btn-sm me-2">
              <i class="fas fa-edit"></i> Edit
            </button>
            <button @click="removeCustomer(customer.id)" class="btn btn-danger btn-sm">
              <i class="fas fa-trash-alt"></i> Delete
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
            <input v-model="newCustomer.name" class="form-control mt-2" placeholder="Name" />
            <input v-model="newCustomer.address" class="form-control mt-2" placeholder="Address" />
            <input v-model="newCustomer.email" class="form-control mt-2" placeholder="Email" />
            <input v-model="newCustomer.phone" class="form-control mt-2" placeholder="Phone" />
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" @click="confirmAddCustomer">Add Customer</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal fenêtre pour afficher les détails du client -->
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
            <p><strong>Name:</strong> {{ selectedCustomer.name }}</p>
            <p><strong>Address:</strong> {{ selectedCustomer.address }}</p>
            <p><strong>Email:</strong> {{ selectedCustomer.email }}</p>
            <p><strong>Phone:</strong> {{ selectedCustomer.phone }}</p>
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
            <input v-model="editingCustomer.name" class="form-control mt-2" placeholder="Name" />
            <input v-model="editingCustomer.address" class="form-control mt-2" placeholder="Address" />
            <input v-model="editingCustomer.email" class="form-control mt-2" placeholder="Email" />
            <input v-model="editingCustomer.phone" class="form-control mt-2" placeholder="Phone" />
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
      selectedCustomer: null,
      editingCustomer: null
    };
  },
  methods: {
    confirmAddCustomer() {
      if (this.newCustomer.name && this.newCustomer.email && this.newCustomer.phone) {
        this.customers.push({ ...this.newCustomer, id: Date.now() });
        this.newCustomer = { name: '', address: '', email: '', phone: '' };
        const modal = document.getElementById('addCustomerModal');
        const modalInstance = bootstrap.Modal.getInstance(modal);
        modalInstance.hide(); // Ferme la fenêtre modale après l'ajout
      } else {
        alert('Please fill out all required fields.');
      }
    },
    editCustomer(customer) {
      this.editingCustomer = { ...customer };
    },
    closeEditModal() {
      this.editingCustomer = null;
    },
    saveCustomer() {
      const index = this.customers.findIndex(c => c.id === this.editingCustomer.id);
      if (index !== -1) {
        this.$set(this.customers, index, this.editingCustomer);
        alert('Changes saved successfully!');
      }
      this.closeEditModal();
    },
    removeCustomer(id) {
      if (confirm('Are you sure you want to delete this customer?')) {
        this.customers = this.customers.filter(customer => customer.id !== id);
      }
    },
    listCustomer(customer) {
      this.selectedCustomer = customer;
    },
    clearSelection() {
      this.selectedCustomer = null;
    }
  }
};
</script>

<style scoped>
/* Styles to make the design chic */
h2 {
  font-weight: bold;
  color: #333;
}

.card {
  background-color: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.table {
  width: 100%;
  margin-bottom: 1rem;
  color: #212529;
}

button i {
  margin-right: 5px;
}

.modal.show {
  display: block;
  background: rgba(0, 0, 0, 0.5);
}

.modal-dialog {
  max-width: 600px;
  margin: 1.75rem auto;
}
</style>
