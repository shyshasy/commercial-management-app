<template>
    <div>
      <h2>Order Details</h2>
      <!-- Form to add/edit order details -->
      <div class="mb-3">
        <input v-model="newDetail.product" class="form-control mb-2" placeholder="Product">
        <input v-model="newDetail.quantity" type="number" class="form-control mb-2" placeholder="Quantity">
        <input v-model="newDetail.price" type="number" step="0.01" class="form-control mb-2" placeholder="Price">
        <button @click="addDetail" class="btn btn-primary">Add Detail</button>
      </div>
      <!-- List of order details -->
      <ul class="list-group">
        <li v-for="detail in details" :key="detail.id" class="list-group-item d-flex justify-content-between align-items-center">
          <span>{{ detail.product }} - {{ detail.quantity }} - {{ detail.price.toFixed(2) }} €</span>
          <button @click="removeDetail(detail.id)" class="btn btn-danger btn-sm">Remove</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { ref, defineProps } from 'vue';
  
  // Define props
  const props = defineProps({
    orderId: {
      type: Number,
      required: true
    }
  });
  
  // Declare reactive variables
  const newDetail = ref({
    product: '',
    quantity: '',
    price: ''
  });
  const details = ref([]);
  
  // Methods to manage order details
  const addDetail = () => {
    if (newDetail.value.product && newDetail.value.quantity && newDetail.value.price) {
      details.value.push({ ...newDetail.value, id: Date.now() });
      newDetail.value = { product: '', quantity: '', price: '' };
    } else {
      alert('Please fill in all fields.');
    }
  };
  
  const removeDetail = (id) => {
    details.value = details.value.filter(detail => detail.id !== id);
  };
  </script>
  
  <style scoped>
  /* Styles for the OrderDetail component */
  </style>
