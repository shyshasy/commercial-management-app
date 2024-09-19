<template>
    <div class="container mt-5">
      <h2 class="mb-4">List of Orders</h2>
      <button class="btn btn-primary mb-3" @click="goToOrderForm">Add New Order</button>
      <table class="table table-striped">
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
              <button class="btn btn-sm btn-info" @click="editOrder(index)">Edit</button>
              <button class="btn btn-sm btn-danger" @click="deleteOrder(index)">Delete</button>
              <button class="btn btn-sm btn-secondary" @click="viewOrder(index)">View</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    setup(props, { emit }) {
      const orders = ref([
        { date: '25/07/2024', customer: 'John Doe', address: '123 Main St', trackNumber: 'TN001', status: 'Shipped' },
        { date: '26/07/2024', customer: 'Jane Smith', address: '456 Oak St', trackNumber: 'TN002', status: 'Delivered' },
      ]);
  
      const goToOrderForm = () => {
        emit('changeView', 'form');
      };
  
      const editOrder = (index) => {
        alert(`Edit Order #${index + 1}`);
      };
  
      const deleteOrder = (index) => {
        if (confirm(`Are you sure you want to delete order #${index + 1}?`)) {
          orders.value.splice(index, 1);
        }
      };
  
      const viewOrder = (index) => {
        alert(`Viewing details for Order #${index + 1}`);
      };
  
      return {
        orders,
        goToOrderForm,
        editOrder,
        deleteOrder,
        viewOrder,
      };
    },
  };
  </script>
  
  <style scoped>
  /* Add your styles here */
  </style>
  