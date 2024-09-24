<template>
  <div class="container mt-5">
    <h2>List of Orders</h2>

    <!-- Button to open Add Order Modal -->
    <router-link to="/Orders">
      <button class="btn btn-success mb-3">
        <i class="fas fa-plus"></i> Add New Order
      </button>
    </router-link>

    <!-- Orders table -->
    <table class="table table-striped table-bordered mt-4">
      <thead>
        <tr>
          <th>Date</th>
          <th>Customer</th>
          <th>Delivery Address</th>
          <th>Track Number</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(order, index) in orders" :key="index">
          <td>{{ order.date }}</td>
          <td>{{ order.customer }}</td>
          <td>{{ order.address }}</td>
          <td>{{ order.trackNumber }}</td>
          <td>{{ order.status }}</td>
          <td>
            
            <router-link :to="`/OrderList/view/${order.trackNumber}`" class="btn btn-info btn-sm me-2">
  <i class="fas fa-eye"></i>
</router-link>
<router-link :to="`/OrderList/edit/${order.trackNumber}`" class="btn btn-warning btn-sm me-2">
  <i class="fas fa-edit"></i>
</router-link>



            <button class="btn btn-danger btn-sm" @click="deleteOrder(index)">
              <i class="fas fa-trash-alt"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Modal for adding an order -->
    <div v-if="showAddModal" class="modal show d-block" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Add New Order</h5>
            <button type="button" class="close" aria-label="Close" @click="closeAddModal">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <input v-model="newOrder.date" class="form-control mb-2" placeholder="Date">
            <input v-model="newOrder.customer" class="form-control mb-2" placeholder="Customer">
            <input v-model="newOrder.address" class="form-control mb-2" placeholder="Delivery Address">
            <input v-model="newOrder.trackNumber" class="form-control mb-2" placeholder="Track Number">
            <input v-model="newOrder.status" class="form-control mb-2" placeholder="Status">
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" @click="closeAddModal">Close</button>
            <button type="button" class="btn btn-primary" @click="addOrder">Add Order</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal for editing an order -->
    <div v-if="editingOrder" class="modal show d-block" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Edit Order</h5>
            <button type="button" class="close" aria-label="Close" @click="closeEditModal">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <input v-model="editingOrder.date" class="form-control mb-2" placeholder="Date">
            <input v-model="editingOrder.customer" class="form-control mb-2" placeholder="Customer">
            <input v-model="editingOrder.address" class="form-control mb-2" placeholder="Delivery Address">
            <input v-model="editingOrder.trackNumber" class="form-control mb-2" placeholder="Track Number">
            <input v-model="editingOrder.status" class="form-control mb-2" placeholder="Status">
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" @click="closeEditModal">Close</button>
            <button type="button" class="btn btn-primary" @click="saveOrder">Save Changes</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal for viewing an order -->
    <div v-if="selectedOrder" class="modal show d-block" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Order Details</h5>
            <button type="button" class="close" aria-label="Close" @click="clearSelection">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p><strong>Date:</strong> {{ selectedOrder.date }}</p>
            <p><strong>Customer:</strong> {{ selectedOrder.customer }}</p>
            <p><strong>Delivery Address:</strong> {{ selectedOrder.address }}</p>
            <p><strong>Track Number:</strong> {{ selectedOrder.trackNumber }}</p>
            <p><strong>Status:</strong> {{ selectedOrder.status }}</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" @click="clearSelection">Close</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Reactive variables
const orders = ref([
  { date: '07/25/2024', customer: 'John Doe', address: '123 Main St', trackNumber: 'TN001', status: 'Shipped' },
  { date: '07/26/2024', customer: 'Jane Smith', address: '456 Oak St', trackNumber: 'TN002', status: 'Delivered' },
]);

const newOrder = ref({
  date: '',
  customer: '',
  address: '',
  trackNumber: '',
  status: ''
});

const selectedOrder = ref(null);
const editingOrder = ref(null);
const showAddModal = ref(false);

// Functions
const openAddModal = () => {
  showAddModal.value = true;
};

const closeAddModal = () => {
  showAddModal.value = false;
};

const addOrder = () => {
  if (newOrder.value.date && newOrder.value.customer) {
    orders.value.push({ ...newOrder.value });
    newOrder.value = { date: '', customer: '', address: '', trackNumber: '', status: '' };
    closeAddModal();
  } else {
    alert('Please fill in all required fields.');
  }
};

const editOrder = (order) => {
  editingOrder.value = { ...order };
};

const closeEditModal = () => {
  editingOrder.value = null;
};

const saveOrder = () => {
  const index = orders.value.findIndex(o => o.trackNumber === editingOrder.value.trackNumber);
  if (index !== -1) {
    orders.value[index] = editingOrder.value;
    alert('Changes saved successfully!');
  }
  closeEditModal();
};

const deleteOrder = (index) => {
  if (orders.value.length <= 1) {
    alert("You cannot delete the last order.");
    return;
  }

  if (confirm(`Are you sure you want to delete order #${index + 1}?`)) {
    orders.value.splice(index, 1);
  }
};

const viewOrder = (order) => {
  selectedOrder.value = order;
};

const clearSelection = () => {
  selectedOrder.value = null;
};
</script>

<style scoped>
/* Add your styles here if necessary */
</style>
