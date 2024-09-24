<template>
    <div class="container mt-5 position-relative">
      <h1 class="mb-4">Edit Order</h1> 
      <ul class="nav nav-tabs">
        <li class="nav-item">
          <a class="nav-link active" href="#">Edit Order</a>
        </li>
      </ul>
      <div class="form-buttons">
        <router-link to="/OrderList" class="btn btn-secondary me-2">Return to OrderList</router-link>
        <button type="submit" class="btn btn-success" @click="saveOrder">Save Changes</button>
      </div>
      
      <form @submit.prevent="saveOrder" class="mt-4">
        <div class="row">
          <div class="col-md-6">
            <div class="form-group mb-3">
              <label for="date">Date</label>
              <input type="date" class="form-control" id="date" v-model="order.date">
            </div>
            <div class="form-group mb-3">
              <label for="customerName">Customer Name</label>
              <input type="text" class="form-control" id="customerName" v-model="order.customerName">
            </div>
            <div class="form-group mb-3">
              <label for="deliveryAddress">Delivery Address</label>
              <input type="text" class="form-control" id="deliveryAddress" v-model="order.deliveryAddress">
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group mb-3">
              <label for="trackNumber">Track Number</label>
              <input type="text" class="form-control" id="trackNumber" v-model="order.trackNumber">
            </div>
            <div class="form-group mb-3">
              <label for="orderStatus">Order Status</label>
              <select id="orderStatus" class="form-control" v-model="order.status">
                <option value="processing">Processing</option>
                <option value="shipped">Shipped</option>
                <option value="delivered">Delivered</option>
              </select>
            </div>
          </div>
        </div>
        <div class="form-group mt-4">
          <label>Order Details</label>
          <table class="table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(detail, index) in order.details" :key="index">
                <td><input type="text" class="form-control" v-model="detail.product" required></td>
                <td><input type="number" class="form-control" v-model="detail.quantity" min="1" required></td>
                <td><input type="number" class="form-control" v-model="detail.price" step="0.01" min="0" required></td>
                <td><button type="button" class="btn btn-danger" @click="removeDetail(index)">Remove</button></td>
              </tr>
            </tbody>
          </table>
          <button type="button" class="btn btn-primary" @click="addDetail">Add New Detail</button>
        </div>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, computed } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  
  const route = useRoute();
  const router = useRouter();
  
  const order = ref({
    date: '',
    customerName: '',
    deliveryAddress: '',
    trackNumber: '',
    status: 'processing',
    details: [{ product: '', quantity: 1, price: 0 }]
  });
  
  const orders = ref([
    { date: '07/25/2024', customerName: 'John Doe', deliveryAddress: '123 Main St', trackNumber: 'TN001', status: 'Shipped', details: [{ product: 'Item A', quantity: 2, price: 15.00 }] },
    // Add more sample orders as needed
  ]);
  
  onMounted(() => {
    const trackNumber = route.params.trackNumber;
    const existingOrder = orders.value.find((o) => o.trackNumber === trackNumber);
    if (existingOrder) {
      order.value = { ...existingOrder };
    } else {
      alert('Order not found');
      router.push('/OrderList');
    }
  });
  
  const addDetail = () => {
    order.value.details.push({ product: '', quantity: 1, price: 0 });
  };
  
  const removeDetail = (index) => {
    if (order.value.details.length <= 1) {
      alert("You cannot delete the last order detail.");
      return;
    }
    order.value.details.splice(index, 1);
  };
  
  const isValidOrder = computed(() => {
    return order.value.date && order.value.customerName && order.value.deliveryAddress &&
           order.value.details.every(detail => detail.product && detail.quantity > 0 && detail.price >= 0);
  });
  
  const saveOrder = () => {
    if (isValidOrder.value) {
      alert('Order updated successfully!');
      // Here you would typically make an API call to save the order
      router.push('/OrderList');
    } else {
      alert('Please fill in all fields correctly.');
    }
  };
  </script>
  
  <style scoped>
  .container {
    margin-top: 20px;
    position: relative;
  }
  
  .form-buttons {
    display: flex;
    justify-content: flex-end;
    position: absolute;
    top: 0;
    right: 0;
    gap: 0.5rem;
  }
  </style>
  