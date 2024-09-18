<template>
  <div>
    <div class="d-flex align-items-center mb-4">
      <h2>Customer Management</h2>
    </div>

    <!-- Form to add a new customer -->
    <div class="card p-3 mb-4">
      <h4><i class="fas fa-user-plus me-2"></i>Add a new customer</h4>
      <div class="mb-3">
        <input v-model="newCustomer.name" class="form-control mt-2" placeholder="Name" />
        <input v-model="newCustomer.address" class="form-control mt-2" placeholder="Address" />
        <input v-model="newCustomer.email" class="form-control mt-2" placeholder="Email" />
        <input v-model="newCustomer.phone" class="form-control mt-2" placeholder="Phone" />
      </div>
      <button @click="addCustomer" class="btn btn-primary">
        <i class="fas fa-plus-circle"></i> Add Customer
      </button>
    </div>

    <!-- Customer list -->
    <div class="card p-3">
      <ul class="list-group">
        <li v-for="customer in customers" :key="customer.id" class="list-group-item d-flex justify-content-between align-items-center">
          <div>
            <i class="fas fa-user me-2"></i>
            <span>{{ customer.name }}</span>
          </div>
          <div>
            <button @click="listCustomer(customer)" class="btn btn-info btn-sm me-2">
              <i class="fas fa-eye"></i> List
            </button>
            <button @click="editCustomer(customer)" class="btn btn-warning btn-sm me-2">
              <i class="fas fa-edit"></i> Edit
            </button>
            <button @click="removeCustomer(customer.id)" class="btn btn-danger btn-sm">
              <i class="fas fa-trash-alt"></i> Delete
            </button>
          </div>
        </li>
      </ul>
    </div>

    <!-- Selected customer details (for List) -->
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

    <!-- Modal window for editing a customer -->
    <div v-if="editingCustomer" class="modal show d-block" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button @click="listCustomer(editingCustomer)" class="btn btn-info btn-sm mb-3">
              <i class="fas fa-list"></i> List
            </button>
            <h5 class="modal-title">Edit Customer</h5>
            <button type="button" class="close" aria-label="Close" @click="closeEditModal">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="mb-3">
              <input v-model="editingCustomer.name" class="form-control mt-2" placeholder="Name" />
              <input v-model="editingCustomer.address" class="form-control mt-2" placeholder="Address" />
              <input v-model="editingCustomer.email" class="form-control mt-2" placeholder="Email" />
              <input v-model="editingCustomer.phone" class="form-control mt-2" placeholder="Phone" />
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
      selectedCustomer: null, // Selected customer for detail view
      editingCustomer: null // Customer being edited
    };
  },
  methods: {
    addCustomer() {
      if (this.newCustomer.name && this.newCustomer.email && this.newCustomer.phone) {
        this.customers.push({ ...this.newCustomer, id: Date.now() });
        this.newCustomer = { name: '', address: '', email: '', phone: '' };
      } else {
        alert('Please fill out all required fields.');
      }
    },
    editCustomer(customer) {
      this.editingCustomer = { ...customer }; // Prepare copy for editing
    },
    closeEditModal() {
      this.editingCustomer = null; // Close the edit modal
    },
    saveCustomer() {
      const index = this.customers.findIndex(c => c.id === this.editingCustomer.id);
      if (index !== -1) {
        this.$set(this.customers, index, this.editingCustomer);
        alert('Changes saved successfully!'); // Confirmation message
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
      this.selectedCustomer = null; // Close the detail view modal
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

.btn-info {
  background-color: #17a2b8;
  border-color: #17a2b8;
}

.btn-warning {
  background-color: #ffc107;
  border-color: #ffc107;
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

/* Modal window style */
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
  margin-bottom: 15px; /* Space between "List" button and the rest of the form */
}
</style>
