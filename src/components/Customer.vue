<template>
  <div class="container mt-3">
    <h2>Customers</h2>
    <button class="btn btn-primary mb-3" @click="addCustomer">Add New</button>
    <table class="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Address</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="customer in customers" :key="customer.id">
          <td>{{ customer.name }}</td>
          <td>{{ customer.address }}</td>
          <td>{{ customer.email }}</td>
          <td>{{ customer.phone }}</td>
          <td>
            <button class="btn btn-warning btn-sm" @click="editCustomer(customer)">Edit</button>
            <button class="btn btn-danger btn-sm" @click="deleteCustomer(customer.id)">Delete</button>
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
      customers: []
    }
  },
  methods: {
    addCustomer() {
      // Logic to add a new customer
    },
    editCustomer(customer) {
      // Logic to edit a customer
    },
    deleteCustomer(id) {
      // Logic to delete a customer
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
