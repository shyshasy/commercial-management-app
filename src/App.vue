<template>
  <div class="container mt-4">
    <h1 class="text-center mb-4">Gestion Commerciale</h1>
    <customer />
    <product />
    <order />
  </div>
</template>

<script>
import Customer from './components/Customer.vue'
import Product from './components/Product.vue'
import Order from './components/Order.vue'

export default {
  components: {
    Customer,
    Product,
    Order
  }
}
</script>

<style>
/* Styles personnalisés pour un design chic de Paris */
.container {
  background-color: #f8f9fa;
  border-radius: 10px;
  padding: 20px;
}
h1 {
  color: #333;
}
</style>
