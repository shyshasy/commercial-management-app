<template>
  <div class="container mt-5">
    <div class="d-flex justify-content-end mb-3">
      <router-link to="/Orders">
        <button class="btn btn-success mb-3">Add New Order</button>
      </router-link>
    </div>
    <h2 class="mb-4">List of Orders</h2>
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
          <td class="action-buttons">
            <button class="btn btn-info btn-sm me-2" @click="viewOrder(index)">
              <i class="fas fa-eye"></i>
            </button>
            <button class="btn btn-warning btn-sm me-2" @click="editOrder(index)">
              <i class="fas fa-edit"></i>
            </button>
            <button class="btn btn-danger btn-sm" @click="deleteOrder(index)">
              <i class="fas fa-trash-alt"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const orders = ref([
  { date: '07/25/2024', customer: 'John Doe', address: '123 Main St', trackNumber: 'TN001', status: 'Shipped' },
  { date: '07/26/2024', customer: 'Jane Smith', address: '456 Oak St', trackNumber: 'TN002', status: 'Delivered' },
]);

const deleteOrder = (index) => {
  // Check if the order to delete is the last one
  if (orders.value.length <= 1) {
    alert("You cannot delete the last order.");
    return;
  }

  // Confirm deletion
  if (confirm(`Are you sure you want to delete order #${index + 1}?`)) {
    orders.value.splice(index, 1);
  }
};

const viewOrder = (index) => {
  alert(`Viewing details for Order #${index + 1}`);
};

const editOrder = (index) => {
  alert(`Edit Order #${index + 1}`);
};
</script>

<style scoped>
/* Add your styles here if necessary */
</style>
