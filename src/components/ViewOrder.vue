<template>
  <div class="container mt-5 position-relative">
    <h2>View Order</h2>
    <div class="card mt-4">
      <div class="card-body">
        <div class="row">
          <div class="col-md-6">
            <div class="form-group mb-3">
              <label>Date</label>
              <input type="text" class="form-control" v-model="order.date" readonly>
            </div>
            <div class="form-group mb-3">
              <label>Customer Name</label>
              <input type="text" class="form-control" v-model="order.customerName" readonly>
            </div>
            <div class="form-group mb-3">
              <label>Delivery Address</label>
              <input type="text" class="form-control" v-model="order.deliveryAddress" readonly>
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group mb-3">
              <label>Track Number</label>
              <input type="text" class="form-control" v-model="order.trackNumber" readonly>
            </div>
            <div class="form-group mb-3">
              <label>Status</label>
              <input type="text" class="form-control" v-model="order.status" readonly>
            </div>
          </div>
        </div>
        
        <h4 class="mt-4">Order Details</h4>
        <table class="table mt-2">
          <thead>
            <tr>
              <th>Product</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(detail, index) in order.details" :key="index">
              <td>{{ detail.product }}</td>
              <td>{{ detail.quantity }}</td>
              <td>{{ detail.price.toFixed(2) }}</td>
            </tr>
          </tbody>
        </table>

        <router-link to="/OrderList" class="btn btn-secondary mt-3">Return to Order List</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const order = ref({
  details: []
});

const orders = ref([
  { date: '07/25/2024', customerName: 'John Doe', deliveryAddress: '123 Main St', trackNumber: 'TN001', status: 'Shipped', details: [{ product: 'Item A', quantity: 2, price: 15.00 }] },
  { date: '07/26/2024', customerName: 'Jane Smith', deliveryAddress: '456 Oak St', trackNumber: 'TN002', status: 'Delivered', details: [{ product: 'Item B', quantity: 1, price: 30.00 }] },
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
.container {
    margin-top: 20px;
    position: relative;
}


input[readonly] {
    background-color: #f8f9fa; 
    color: #495057;
    border: 1px solid #ced4da; 
    cursor: not-allowed; 
}
</style>
