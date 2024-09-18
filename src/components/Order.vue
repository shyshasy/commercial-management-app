<template>
    <div class="container mt-3">
      <h2>Orders</h2>
      <button class="btn btn-primary mb-3" @click="addOrder">Add New</button>
      <table class="table">
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
          <tr v-for="order in orders" :key="order.id">
            <td>{{ order.date }}</td>
            <td>{{ order.customer }}</td>
            <td>{{ order.deliveryAddress }}</td>
            <td>{{ order.trackNumber }}</td>
            <td>{{ order.status }}</td>
            <td>
              <button class="btn btn-warning btn-sm" @click="editOrder(order)">Edit</button>
              <button class="btn btn-danger btn-sm" @click="deleteOrder(order.id)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
      <OrderDetail :orderId="selectedOrderId" v-if="selectedOrderId"/>
    </div>
  </template>
  
  <script>
  import OrderDetail from './OrderDetail.vue'
  
  export default {
    components: {
      OrderDetail
    },
    data() {
      return {
        orders: [],
        selectedOrderId: null
      }
    },
    methods: {
      addOrder() {
        // Logic to add a new order
      },
      editOrder(order) {
        this.selectedOrderId = order.id;
        // Logic to edit an order
      },
      deleteOrder(id) {
        // Logic to delete an order
      }
    }
  }
  </script>
  
  <style scoped>
  /* Parisian chic styling */
  .container {
    background-color: #f8f9fa;
    border-radius: 8px;
    padding: 20px;
  }
  .table th, .table td {
    text-align: center;
  }
  .btn {
    margin-right: 5px;
  }
  </style>
  