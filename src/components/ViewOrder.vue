<template>
    <div class="container mt-5">
      <h2>Order Details</h2>
      <div class="card mt-4">
        <div class="card-body">
          <p><strong>Date:</strong> {{ order.date }}</p>
          <p><strong>Customer:</strong> {{ order.customer }}</p>
          <p><strong>Delivery Address:</strong> {{ order.address }}</p>
          <p><strong>Track Number:</strong> {{ order.trackNumber }}</p>
          <p><strong>Status:</strong> {{ order.status }}</p>
          <router-link to="/orders" class="btn btn-secondary mt-3">Back to Orders</router-link>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  
  const route = useRoute();
  const order = ref({});
  
  const orders = ref([
    { date: '07/25/2024', customer: 'John Doe', address: '123 Main St', trackNumber: 'TN001', status: 'Shipped' },
    { date: '07/26/2024', customer: 'Jane Smith', address: '456 Oak St', trackNumber: 'TN002', status: 'Delivered' },
  ]);
  
  onMounted(() => {
    const trackNumber = route.params.trackNumber;
    const selectedOrder = orders.value.find((o) => o.trackNumber === trackNumber);
    if (selectedOrder) {
      order.value = { ...selectedOrder };
    } else {
      alert('Order not found');
    }
  });
  </script>
  
  <style scoped>
  /* Add your styles here */
  </style>
  