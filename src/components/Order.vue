<template>
    <div class="container mt-5 position-relative">
      <div class="d-flex justify-content-start">
      <h2>Add Order </h2> 
    </div>
      <ul class="nav nav-tabs">
        <li class="nav-item">
          <a class="nav-link active" href="#">Orders</a>
        </li>
      </ul>
      <div class="form-buttons">
        <router-link to="/OrderList" class="btn btn-secondary me-2">Return to Order List</router-link>
        <button type="submit" class="btn btn-success" @click="submitOrder">Submit</button>
      </div>
    
      <form @submit.prevent="submitOrder" class="mt-4">
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
  import { ref, computed } from 'vue';
  
  const order = ref({
    date: '',
    customerName: '',
    deliveryAddress: '',
    trackNumber: '',
    status: 'processing',
    details: [
      { product: '', quantity: 1, price: 0 }
    ]
  });
  
  const addDetail = () => {
    order.value.details.push({ product: '', quantity: 1, price: 0 });
  };
  
  const removeDetail = (index) => {
    
    if (order.value.details.length <= 1) {
      alert("You cannot delete the last order detail..");
      return;
    }
    order.value.details.splice(index, 1);
  };
  
  const isValidOrder = computed(() => {
    return order.value.date && order.value.customerName && order.value.deliveryAddress &&
           order.value.details.every(detail => detail.product && detail.quantity > 0 && detail.price >= 0);
  });
  
  const submitOrder = () => {
    if (isValidOrder.value) {
      
      alert('Order submitted!');
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
  