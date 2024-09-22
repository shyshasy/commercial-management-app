<template>
    <div class="container mt-5">
      <h2>Edit Order</h2>
      <div class="card mt-4">
        <div class="card-body">
          <div class="form-group mb-3">
            <label for="date">Date</label>
            <input v-model="order.date" id="date" class="form-control" placeholder="Date" />
          </div>
          <div class="form-group mb-3">
            <label for="customer">Customer</label>
            <input v-model="order.customer" id="customer" class="form-control" placeholder="Customer" />
          </div>
          <div class="form-group mb-3">
            <label for="address">Delivery Address</label>
            <input v-model="order.address" id="address" class="form-control" placeholder="Delivery Address" />
          </div>
          <div class="form-group mb-3">
            <label for="trackNumber">Track Number</label>
            <input v-model="order.trackNumber" id="trackNumber" class="form-control" placeholder="Track Number" />
          </div>
          <div class="form-group mb-3">
            <label for="status">Status</label>
            <input v-model="order.status" id="status" class="form-control" placeholder="Status" />
          </div>
          <div class="mt-3">
            <button class="btn btn-primary" @click="saveOrder">Save Changes</button>
            <router-link to="/orders" class="btn btn-secondary ms-3">Cancel</router-link>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  
  const route = useRoute();
  const router = useRouter();
  
  const order = ref({
    date: '',
    customer: '',
    address: '',
    trackNumber: '',
    status: '',
  });
  
  const orders = ref([
    { date: '07/25/2024', customer: 'John Doe', address: '123 Main St', trackNumber: 'TN001', status: 'Shipped' },
    { date: '07/26/2024', customer: 'Jane Smith', address: '456 Oak St', trackNumber: 'TN002', status: 'Delivered' },
  ]);
  
  onMounted(() => {
    const trackNumber = route.params.trackNumber;
    const existingOrder = orders.value.find((o) => o.trackNumber === trackNumber);
    if (existingOrder) {
      order.value = { ...existingOrder };
    } else {
      alert('Order not found');
      router.push('/orders');
    }
  });
  
  const saveOrder = () => {
    const index = orders.value.findIndex((o) => o.trackNumber === order.value.trackNumber);
    if (index !== -1) {
      orders.value[index] = { ...order.value };
      alert('Order updated successfully!');
      router.push('/orders');
    } else {
      alert('Failed to update order');
    }
  };
  </script>
  
  <style scoped>
  /* Add your styles here */
  </style>
  