<template>
    <div class="container mt-3">
      <h2>Products</h2>
      <button class="btn btn-primary mb-3" @click="addProduct">Add New</button>
      <table class="table">
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Category</th>
            <th>Barcode</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in products" :key="product.id">
            <td>{{ product.name }}</td>
            <td>{{ product.description }}</td>
            <td>{{ product.price }}</td>
            <td>{{ product.stock }}</td>
            <td>{{ product.category }}</td>
            <td>{{ product.barcode }}</td>
            <td>{{ product.status }}</td>
            <td>
              <button class="btn btn-warning btn-sm" @click="editProduct(product)">Edit</button>
              <button class="btn btn-danger btn-sm" @click="deleteProduct(product.id)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        products: []
      }
    },
    methods: {
      addProduct() {
        // Logic to add a new product
      },
      editProduct(product) {
        // Logic to edit a product
      },
      deleteProduct(id) {
        // Logic to delete a product
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
  