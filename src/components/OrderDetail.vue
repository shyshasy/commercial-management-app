<template>
    <div class="container mt-3">
      <h3>Order Details</h3>
      <button class="btn btn-primary mb-3" @click="addOrderDetail">Add New Detail</button>
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
          <tr v-for="detail in orderDetails" :key="detail.id">
            <td>{{ detail.product }}</td>
            <td>{{ detail.quantity }}</td>
            <td>{{ detail.price }}</td>
            <td>
              <button class="btn btn-danger btn-sm" @click="removeOrderDetail(detail.id)">Remove</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    props: ['orderId'],
    data() {
      return {
        orderDetails: []
      }
    },
    methods: {
      addOrderDetail() {
        // Logic to add a new order detail
      },
      removeOrderDetail(id) {
        // Logic to remove an order detail
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
  