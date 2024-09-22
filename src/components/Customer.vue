<template>
  <div class="container mt-5">
    <h2>Customer Management</h2>

    <!-- Button to open Add Customer Modal -->
    <button class="btn btn-success mb-3" @click="openAddModal">
      <i class="fas fa-plus"></i> Add New Customer
    </button>

    <!-- Customer list in a Bootstrap table -->
    <table class="table table-striped table-bordered mt-4">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Address</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="customer in customers" :key="customer.id">
          <td>{{ customer.name }}</td>
          <td>{{ customer.email }}</td>
          <td>{{ customer.phone }}</td>
          <td>{{ customer.address }}</td>
          <td>
            <button @click="listCustomer(customer)" class="btn btn-info btn-sm me-2">
              <i class="fas fa-eye"></i>
            </button>
            <button @click="editCustomer(customer)" class="btn btn-warning btn-sm me-2">
              <i class="fas fa-edit"></i>
            </button>
            <button @click="removeCustomer(customer.id)" class="btn btn-danger btn-sm">
              <i class="fas fa-trash"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Modal for adding a customer -->
    <div v-if="showAddModal" class="modal show d-block" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Add New Customer</h5>
            <button type="button" class="close" aria-label="Close" @click="closeAddModal">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <input v-model="newCustomer.name" class="form-control mb-2" placeholder="Customer Name">
            <input v-model="newCustomer.email" class="form-control mb-2" placeholder="Email">
            <input v-model="newCustomer.phone" class="form-control mb-2" placeholder="Phone">
            <input v-model="newCustomer.address" class="form-control mb-2" placeholder="Address">
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" @click="closeAddModal">Close</button>
            <button type="button" class="btn btn-primary" @click="addCustomer">Add Customer</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal for listing a customer -->
    <div v-if="selectedCustomer" class="modal show d-block" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">View customer</h5>
            <button type="button" class="close" aria-label="Close" @click="clearSelection">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="mb-2">
              <label>Customer Name</label>
              <input v-model="selectedCustomer.name" class="form-control" readonly>
            </div>
            <div class="mb-2">
              <label>Email</label>
              <input v-model="selectedCustomer.email" class="form-control" readonly>
            </div>
            <div class="mb-2">
              <label>Phone</label>
              <input v-model="selectedCustomer.phone" class="form-control" readonly>
            </div>
            <div class="mb-2">
              <label>Address</label>
              <input v-model="selectedCustomer.address" class="form-control" readonly>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" @click="clearSelection">Close</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal for editing a customer -->
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
            <div class="mb-2">
              <label>Customer Name</label>
              <input v-model="editingCustomer.name" class="form-control" placeholder="Name">
            </div>
            <div class="mb-2">
              <label>Email</label>
              <input v-model="editingCustomer.email" class="form-control" placeholder="Email">
            </div>
            <div class="mb-2">
              <label>Phone</label>
              <input v-model="editingCustomer.phone" class="form-control" placeholder="Phone">
            </div>
            <div class="mb-2">
              <label>Address</label>
              <input v-model="editingCustomer.address" class="form-control" placeholder="Address">
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

// Reactive variables
const customers = ref([
  {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    phone: '123-456-7890',
    address: '123 Main St'
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane@example.com',
    phone: '987-654-3210',
    address: '456 Elm St'
  }
]);

const newCustomer = ref({
  name: '',
  email: '',
  phone: '',
  address: ''
});
const selectedCustomer = ref(null);
const editingCustomer = ref(null);
const showAddModal = ref(false);

// Functions
const openAddModal = () => {
  showAddModal.value = true;
};

const closeAddModal = () => {
  showAddModal.value = false;
};

const addCustomer = () => {
  if (newCustomer.value.name && newCustomer.value.email) {
    customers.value.push({ ...newCustomer.value, id: Date.now() });
    newCustomer.value = { name: '', email: '', phone: '', address: '' };
    closeAddModal();
  } else {
    alert('Please fill in all required fields.');
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
  }
  closeEditModal();
};

const removeCustomer = (id) => {
  if (confirm('Are you sure you want to delete this customer?')) {
    customers.value = customers.value.filter(customer => customer.id !== id);
  }
};

const listCustomer = (customer) => {
  selectedCustomer.value = customer;
};

const clearSelection = () => {
  selectedCustomer.value = null;
};
</script>

<style scoped>
.custom-table {
  border: 2px solid #007bff; /* Bordure bleue */
  border-radius: 10px; /* Coins arrondis */
  overflow: hidden; /* Contenu du tableau bien contenu */
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); /* Ombre douce */
}
</style>
